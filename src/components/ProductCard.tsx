import React from 'react';
import { ShoppingCart, Star, Zap, Badge as BadgeIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group relative overflow-hidden gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-gradient-accent shadow-accent">
            <Zap className="w-3 h-3 mr-1" />
            New
          </Badge>
        )}
        {product.isBestSeller && (
          <Badge variant="secondary" className="bg-gradient-primary shadow-glow">
            <Star className="w-3 h-3 mr-1" />
            Best Seller
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="destructive">
            <BadgeIcon className="w-3 h-3 mr-1" />
            Out of Stock
          </Badge>
        )}
      </div>

      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-background to-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-6">
          {/* Brand */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-primary text-primary"
                />
              ))}
            </div>
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Features */}
          <div className="space-y-1 mb-4">
            {product.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                {feature}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <Badge variant="destructive" className="text-xs">
                Save {formatPrice(product.originalPrice - product.price)}
              </Badge>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-gradient-primary hover:shadow-glow transition-spring hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;