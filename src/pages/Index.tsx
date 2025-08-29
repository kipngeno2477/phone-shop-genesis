import React, { useState, useMemo } from 'react';
import { Smartphone, Star, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CartProvider } from '../contexts/CartContext';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import ShoppingCart from '../components/ShoppingCart';
import { products } from '../data/products';
import { Product } from '../types/product';
import heroImage from '../assets/hero-phones.jpg';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<'All' | 'Apple' | 'Samsung'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      
      return matchesSearch && matchesBrand;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedBrand, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Your Trusted Apple Dealer in Kenya
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
                  Where quality meets innovation in Kenya's top destination for authentic products and exceptional service.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-spring hover:scale-105 shadow-large"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="transition-spring hover:scale-105"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right: Phone Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 flex items-center justify-center">
                    <img
                      src={products.find(p => p.id === 'iphone-15-pro-max')?.image}
                      alt="iPhone 15 Pro Max"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 flex items-center justify-center">
                    <img
                      src={products.find(p => p.id === 'samsung-s24-ultra')?.image}
                      alt="Samsung S24 Ultra"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 p-4 flex items-center justify-center">
                    <img
                      src={products.find(p => p.id === 'iphone-14')?.image}
                      alt="iPhone 14"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 flex items-center justify-center">
                    <img
                      src={products.find(p => p.id === 'samsung-z-fold-5')?.image}
                      alt="Samsung Z Fold 5"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Why Choose centsoreske?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-muted-foreground">100% genuine Apple and Samsung devices with full warranty</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick and secure delivery across Kenya</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary/20 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Professional sales and repair services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Premium Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from the latest iPhone and Samsung Galaxy models, each featuring cutting-edge technology and premium design.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <ProductFilters
              selectedBrand={selectedBrand}
              onBrandChange={setSelectedBrand}
              sortBy={sortBy}
              onSortChange={setSortBy}
              productCount={filteredProducts.length}
            />
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Smartphone className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedBrand('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Index;
