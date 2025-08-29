import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getBrandProducts } from '../data/products';
import Navigation from '../components/Navigation';
import { Product } from '../types/product';

interface CategoryProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const humanize = (slug: string) => {
  if (!slug) return '';
  return slug.charAt(0).toUpperCase() + slug.slice(1);
};

const Category: React.FC<CategoryProps> = ({ searchQuery, onSearchChange }) => {
  const { slug } = useParams();
  const brandKey = slug?.toLowerCase();

  // map route slug to brand name used in products data
  const brandMap: Record<string, string> = {
    iphones: 'Apple',
    apple: 'Apple',
    samsungs: 'Samsung',
    samsung: 'Samsung',
  laptops: 'Laptops',
  accessories: 'Accessories',
  protectors: 'Accessories',
  phonecases: 'Accessories',
  };

  const brand = brandMap[brandKey ?? ''] ?? '';

  // Only call getBrandProducts for Apple or Samsung to satisfy the typed helper
  let items: Product[] = [];
  if (brand === 'Apple' || brand === 'Samsung' || brand === 'Laptops' || brand === 'Accessories') {
    items = getBrandProducts(brand as 'Apple' | 'Samsung' | 'Laptops' | 'Accessories');
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation searchQuery={searchQuery} onSearchChange={onSearchChange} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{humanize(slug || '')}</h1>
          <p className="text-muted-foreground">Browse items in the {brand} category.</p>
        </div>

        {items.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((p) => (
              <div
                key={p.id}
                className="category-card bg-blue-50 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-lg motion-reduce:transform-none"
              >
                <div className="w-full h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain object-center" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{p.brand}</div>
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold">KSH {p.price.toLocaleString()}</div>
                    <Link to={`/product/${p.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No items found for {humanize(slug || '')}</h3>
            <p className="text-muted-foreground mb-4">Try another category or return to <Link to="/">home</Link>.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .category-card { animation: fadeInUp 400ms ease both; }
        .category-card:nth-child(1) { animation-delay: 0ms; }
        .category-card:nth-child(2) { animation-delay: 80ms; }
        .category-card:nth-child(3) { animation-delay: 160ms; }
        .category-card:nth-child(4) { animation-delay: 240ms; }
        .category-card:nth-child(5) { animation-delay: 320ms; }
        .category-card:nth-child(6) { animation-delay: 400ms; }
        .category-card:nth-child(7) { animation-delay: 480ms; }
        .category-card:nth-child(8) { animation-delay: 560ms; }
      `}</style>
    </div>
  );
};

export default Category;
