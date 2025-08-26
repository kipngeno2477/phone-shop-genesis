import React from 'react';
import { Filter, SortDesc } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface ProductFiltersProps {
  selectedBrand: 'All' | 'Apple' | 'Samsung';
  onBrandChange: (brand: 'All' | 'Apple' | 'Samsung') => void;
  sortBy: 'name' | 'price-low' | 'price-high';
  onSortChange: (sort: 'name' | 'price-low' | 'price-high') => void;
  productCount: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  productCount
}) => {
  const brands = [
    { value: 'All' as const, label: 'All Brands', count: productCount },
    { value: 'Apple' as const, label: 'Apple', icon: '🍎' },
    { value: 'Samsung' as const, label: 'Samsung', icon: '📱' }
  ];

  const sortOptions = [
    { value: 'name' as const, label: 'Name A-Z' },
    { value: 'price-low' as const, label: 'Price: Low to High' },
    { value: 'price-high' as const, label: 'Price: High to Low' }
  ];

  return (
    <Card className="gradient-card border-0 shadow-subtle">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Brand Filter */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">Filter by Brand</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Button
                  key={brand.value}
                  variant={selectedBrand === brand.value ? "default" : "outline"}
                  onClick={() => onBrandChange(brand.value)}
                  className={`transition-spring hover:scale-105 ${
                    selectedBrand === brand.value 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {brand.icon && <span className="mr-2">{brand.icon}</span>}
                  {brand.label}
                  {brand.count && (
                    <Badge variant="secondary" className="ml-2">
                      {brand.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <SortDesc className="w-4 h-4 text-primary" />
              <h3 className="font-semibold">Sort By</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={sortBy === option.value ? "default" : "outline"}
                  onClick={() => onSortChange(option.value)}
                  className={`transition-spring hover:scale-105 ${
                    sortBy === option.value 
                      ? 'bg-gradient-primary shadow-glow' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
          Showing {productCount} {productCount === 1 ? 'product' : 'products'}
          {selectedBrand !== 'All' && ` from ${selectedBrand}`}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;