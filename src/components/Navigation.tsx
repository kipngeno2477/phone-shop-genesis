import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Menu, X, Home, Info, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';
import logoPhone from '../assets/logo-phone.png';

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
  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      navigate('/cart');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary p-1 flex items-center justify-center overflow-hidden">
                <img 
                  src={logoPhone} 
                  alt="Phone Logo" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  centsoreske
                </h1>
                <p className="text-xs text-muted-foreground">Premium Phones</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search iPhones, Samsung phones..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 glass border-0 focus:ring-2 focus:ring-primary/50"
                />
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search phones..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 glass border-0 focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div 
            ref={mobileMenuRef}
            className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-large animate-slide-in-right"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors hover:bg-muted ${
                    location.pathname === item.path ? 'bg-muted text-primary' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
              
              <button
                onClick={handleCartClick}
                className="w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors hover:bg-muted relative"
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
    </>
  );
};

export default Navigation;