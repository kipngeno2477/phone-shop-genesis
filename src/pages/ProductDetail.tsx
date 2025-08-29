import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Star, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';
import { getProductById } from '../data/products';
import Navigation from '../components/Navigation';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const capacityOptions = ['128GB', '256GB', '512GB', '1TB'];
  const colorOptions = ['Space Black', 'Deep Purple', 'Gold', 'Silver'];

  const handleAddToCart = () => {
    if (!selectedCapacity || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both capacity and color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWhatsAppOrder = () => {
    if (!selectedCapacity || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both capacity and color before ordering.",
        variant: "destructive",
      });
      return;
    }

    const message = `Hi! I'd like to order:
    
Product: ${product.name}
Capacity: ${selectedCapacity}  
Color: ${selectedColor}
Price: KSh ${product.price.toLocaleString()}

Please confirm availability and delivery details.`;

    const whatsappUrl = `https://wa.me/254720209187?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && <Badge className="bg-gradient-accent text-white">New</Badge>}
                {product.isBestSeller && <Badge variant="outline">Best Seller</Badge>}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  KSh {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Storage Capacity</label>
                <Select value={selectedCapacity} onValueChange={setSelectedCapacity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    {capacityOptions.map((capacity) => (
                      <SelectItem key={capacity} value={capacity}>
                        {capacity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Brand</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Display</span>
                  <span>{product.features[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processor</span>
                  <span>{product.features[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Camera</span>
                  <span>{product.features[2]}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button
                onClick={handleWhatsAppOrder}
                variant="outline"
                className="w-full"
                size="lg"
              >
                Order via WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>Genuine Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;