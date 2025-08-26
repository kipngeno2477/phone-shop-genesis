import React from 'react';
import { ShoppingCart, Search, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useCart } from '../contexts/CartContext';

interface NavigationProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  searchQuery,
  onSearchChange,
  onCartClick
}) => {
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 glass border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                centsoreske
              </h1>
              <p className="text-xs text-muted-foreground">Premium Phones</p>
            </div>
          </div>

          {/* Search */}
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
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative transition-spring hover:scale-105"
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
  );
};

export default Navigation;