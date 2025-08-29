import React, { useState, useEffect } from 'react';
import { Star, Zap, ArrowRight } from 'lucide-react';
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CartProvider } from '../contexts/CartContext';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';

// Hero image URL
const HERO_URL = 'https://i.pinimg.com/736x/dc/73/2a/dc732ae5b28015fe0790ce89085a8b3b.jpg';

// Category images - optimized for web with consistent aspect ratios
const LAPTOP_IMAGE = 'https://i.pinimg.com/1200x/f5/ce/07/f5ce078e5112d477ba9edfbcc53d7870.jpg';
const IPHONE_IMAGE = 'https://i.postimg.cc/K8cV7M13/12.jpg';
const SAMSUNG_IMAGE = 'https://i.postimg.cc/zf6c120T/13.jpg';
const ACCESSORIES_IMAGE = 'https://i.pinimg.com/736x/fa/92/8d/fa928d776c1398958a331782eca1779f.jpg';

interface IndexProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Index: React.FC<IndexProps> = ({ searchQuery, onSearchChange }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({
    laptops: false,
    iphones: false,
    samsungs: false,
    accessories: false
  });

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const handleImageLoad = (category: string) => {
    setImageLoaded(prev => ({ ...prev, [category]: true }));
  };

  useEffect(() => {
    if (!carouselApi) return;

    const id = setInterval(() => {
      try {
        carouselApi.scrollNext();
      } catch (e) {
        // ignore
      }
    }, 10000);

    return () => clearInterval(id);
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-black">
                    Premium{' '}
                    <span className="relative inline-block">
                      Phones
                      <svg className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M2 6 C25 10 75 0 98 6" fill="none" stroke="#ff8a00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {' '}&amp;{' '}
                    <span className="relative inline-block">
                      Laptops
                      <svg className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M2 6 C25 10 75 0 98 6" fill="none" stroke="#ff8a00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl">
                  Trusted, Affordable, and Always Near You.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-44 sm:w-auto bg-gradient-primary hover:opacity-90 transition-spring hover:scale-105 shadow-large"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-44 sm:w-auto transition-spring hover:scale-105"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right: Single hero image (responsive) */}
            <div className="relative">
              <div className="w-full h-56 sm:h-72 md:h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-large">
                <img
                  src={HERO_URL}
                  alt="Hero phones"
                  className="w-full h-full object-cover"
                />
              </div>
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
              Our Collection
            </h2>
            <p className="text-lg text-black font-semibold max-w-2xl mx-auto">
              Your Perfect ecosystem is just one click away 🙂
            </p>
          </div>

          {/* Services (Categories) */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Laptops */}
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded.laptops ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <img
                    src={LAPTOP_IMAGE}
                    alt="Laptops"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded.laptops ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad('laptops')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl mb-3 text-gray-800">Laptops</h4>
                  <p className="text-sm text-muted-foreground mb-5">Explore a curated selection of laptops.</p>
                  <Link to="/category/laptops">
                    <Button 
                      size="sm" 
                      className="mx-auto px-6 py-2 bg-gradient-primary hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    >
                      View more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* iPhones */}
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded.iphones ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <img
                    src={IPHONE_IMAGE}
                    alt="iPhones"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded.iphones ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad('iphones')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl mb-3 text-gray-800">iPhones</h4>
                  <p className="text-sm text-muted-foreground mb-5">Browse the latest iPhone models.</p>
                  <Link to="/category/iphones">
                    <Button 
                      size="sm" 
                      className="mx-auto px-6 py-2 bg-gradient-primary hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    >
                      View more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Samsung */}
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded.samsungs ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <img
                    src={SAMSUNG_IMAGE}
                    alt="Samsung"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded.samsungs ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad('samsungs')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl mb-3 text-gray-800">Samsung</h4>
                  <p className="text-sm text-muted-foreground mb-5">Shop Galaxy phones and foldables.</p>
                  <Link to="/category/samsungs">
                    <Button 
                      size="sm" 
                      className="mx-auto px-6 py-2 bg-gradient-primary hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    >
                      View more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Protectors & Phonecases */}
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <div className={`absolute inset-0 flex items-center justify-center ${imageLoaded.accessories ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <img
                    src={ACCESSORIES_IMAGE}
                    alt="Protectors & Phonecases"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded.accessories ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad('accessories')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-xl mb-3 text-gray-800">Protectors & Phonecases</h4>
                  <p className="text-sm text-muted-foreground mb-5">Screen protectors, cases and more to protect your device.</p>
                  <Link to="/category/accessories">
                    <Button 
                      size="sm" 
                      className="mx-auto px-6 py-2 bg-gradient-primary hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    >
                      View more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* The actual products have been moved into their category pages. */}
          <div className="text-center py-12">
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Section with carousel + FAQs */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
            Why Choose centstoresKE?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Image carousel showing 3 cool images that auto-transition every 10s */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <Carousel
                  opts={{ loop: true }}
                  setApi={setCarouselApi}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-100">
                        <img src={'https://i.pinimg.com/1200x/a0/c0/1d/a0c01d753513b145a29d4be87bd9aa43.jpg'} alt="Premium phones" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-100">
                        <img src={'https://i.pinimg.com/1200x/9d/a0/d6/9da0d6714505028b02328c203bf44845.jpg'} alt="Laptops" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-100">
                        <img src={'https://i.pinimg.com/1200x/37/af/07/37af0765eeb3d0dde512ea8fd49807d1.jpg'} alt="iPhone" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Right: professional why-choose copy + FAQs accordion */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">A better way to buy tech</h3>
                <p className="text-muted-foreground mb-6">We combine authentic devices, fast local delivery, and expert post-sale support so you can buy with confidence.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Genuine Products</h4>
                    <p className="text-sm text-muted-foreground">Sourced from authorised distributors with warranty.</p>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Next-day delivery in major towns.</p>
                  </div>
                  <div className="p-4 border rounded">
                    <h4 className="font-semibold">Trusted Support</h4>
                    <p className="text-sm text-muted-foreground">Repairs and guidance from certified technicians.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Frequently Asked Questions</h4>

                  <div className="space-y-2">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span>Do your products come with warranty?</span>
                          <span className="text-sm text-muted-foreground">+</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-3 text-sm text-muted-foreground">Yes — all devices include the manufacturer or authorised-distributor warranty. We also offer repair services.</div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span>How long does delivery take?</span>
                          <span className="text-sm text-muted-foreground">+</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-3 text-sm text-muted-foreground">Delivery is typically next-day within major cities; rural deliveries depend on location. Tracking details are sent via SMS.</div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span>Can I return a device?</span>
                          <span className="text-sm text-muted-foreground">+</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-3 text-sm text-muted-foreground">Returns are accepted within the warranty/returns window provided the product is in original condition. Contact support for an RMA.</div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span>Do you offer trade-ins?</span>
                          <span className="text-sm text-muted-foreground">+</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-3 text-sm text-muted-foreground">Yes — we assess devices and provide competitive trade-in quotes that can be used towards new purchases.</div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <button className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <span>How can I pay?</span>
                          <span className="text-sm text-muted-foreground">+</span>
                        </button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-3 text-sm text-muted-foreground">We accept card payments, M-Pesa, and cash on delivery (where available). Contact sales for business invoicing.</div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </div>
          </div>
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