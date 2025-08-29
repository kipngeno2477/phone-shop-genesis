import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Menu, X, Home, Info, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { products } from '../data/products';
import type { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

// using a direct image link for the logo below

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  searchQuery,
  onSearchChange,
  onCartClick
}) => {
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Shop', path: '/#products', icon: ShoppingCart },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    };
  }, [isMobileMenuOpen]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const closeMenu = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimatingOut(false);
    }, 300); // Match this with the CSS transition duration
  };

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.slice(2));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(path);
    }
    closeMenu();
  };

  const updateSuggestions = (q: string) => {
    const v = q.trim().toLowerCase();
    if (!v) {
      setSuggestions([]);
      setShowSuggestions(false);
      setHighlightedIndex(-1);
      return;
    }

    const matches = products.filter(p => p.name.toLowerCase().includes(v) || p.id.toLowerCase().includes(v)).slice(0, 8);
    setSuggestions(matches);
    setShowSuggestions(matches.length > 0);
    setHighlightedIndex(-1);
  };

  // whenever parent searchQuery changes, update suggestions
  useEffect(() => {
    updateSuggestions(searchQuery);
  }, [searchQuery]);

  const goToProduct = (id: string) => {
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    navigate(`/product/${id}`);
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      navigate('/cart');
    }
    closeMenu();
  };

  return (
    <>
      <nav className="sticky top-0 bg-blue-100 z-50 glass border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 p-1 flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/020/489/291/non_2x/3d-logo-of-apple-iphone-free-png.png"
                  alt="centstoresKE logo"
                />
              </div>
              <div>
                <h1 className="text-xl bg-blue-100 bg-clip-text text-blue-600">
                  centstoresKE
                </h1>
                <p className="text-xs font-semibold text-black">Premium Phones & Laptops</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-xl font-medium text-black transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search Laptops, iPhones, Samsung phones..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setHighlightedIndex(i => Math.min(i + 1, suggestions.length - 1));
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setHighlightedIndex(i => Math.max(i - 1, 0));
                    } else if (e.key === 'Enter') {
                      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
                        goToProduct(suggestions[highlightedIndex].id);
                      } else {
                        // if no highlight, perform a search-to-first-result behavior
                        if (suggestions.length > 0) goToProduct(suggestions[0].id);
                      }
                    }
                  }}
                  className="pl-10 glass border-0 focus:ring-2 focus:ring-primary/50"
                />

                {showSuggestions && (
                  <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    {suggestions.map((s, idx) => (
                          <Link
                            key={s.id}
                            to={`/product/${s.id}`}
                            onClick={() => { setShowSuggestions(false); setHighlightedIndex(-1); }}
                            onMouseEnter={() => setHighlightedIndex(idx)}
                            className={`w-full text-left flex items-center gap-3 p-3 hover:bg-gray-50 ${highlightedIndex === idx ? 'bg-gray-50' : ''}`}
                          >
                            <img src={s.image} alt={s.name} className="w-10 h-10 object-cover rounded" />
                            <div className="flex-1">
                              <div className="font-medium text-sm">{s.name}</div>
                              <div className="text-xs text-muted-foreground">{s.brand} • KES {s.price?.toLocaleString()}</div>
                            </div>
                          </Link>
                        ))}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Desktop Cart */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCartClick}
                className="relative transition-spring hover:scale-105 hidden sm:flex"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gradient-accent text-white text-xs font-bold animate-pulse"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (isMobileMenuOpen) {
                    closeMenu();
                  } else {
                    setIsMobileMenuOpen(true);
                  }
                }}
                className="lg:hidden"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4" ref={searchRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (suggestions.length > 0) goToProduct(suggestions[0].id);
                  }
                }}
                className="pl-10 glass border-0 focus:ring-2 focus:ring-primary/50"
              />

              {showSuggestions && (
                <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  {suggestions.map((s) => (
                      <Link key={s.id} to={`/product/${s.id}`} onClick={() => { setShowSuggestions(false); setHighlightedIndex(-1); }} className="w-full text-left flex items-center gap-3 p-3 hover:bg-gray-50">
                        <img src={s.image} alt={s.name} className="w-10 h-10 object-cover rounded" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{s.name}</div>
                          <div className="text-xs text-muted-foreground">{s.brand} • KES {s.price?.toLocaleString()}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {(isMobileMenuOpen || isAnimatingOut) && (
        <div className={`fixed inset-0 z-50 lg:hidden ${isAnimatingOut ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div 
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`} 
            onClick={closeMenu} 
          />
          <div 
            ref={mobileMenuRef}
            className={`fixed left-0 top-0 h-full w-80 bg-background border-l shadow-large transition-transform duration-300 ease-out ${isAnimatingOut ? 'transform -translate-x-full' : 'transform translate-x-0'}`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">centstoresKE</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 hover:bg-muted transform hover:translate-x-2 ${
                    location.pathname === item.path ? 'bg-muted text-primary' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
              
              <button
                onClick={handleCartClick}
                className="w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 hover:bg-muted transform hover:translate-x-2 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {itemCount > 0 && (
                  <Badge className="ml-auto bg-gradient-accent text-white">
                    {itemCount}
                  </Badge>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add these styles for the animations */}
  <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.3s ease-out forwards;
        }
        
        .animate-slide-out-left {
          animation: slideOutLeft 0.3s ease-in forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-fade-out {
          animation: fadeOut 0.3s ease-in forwards;
        }
  `}</style>
    </>
  );
};

export default Navigation;