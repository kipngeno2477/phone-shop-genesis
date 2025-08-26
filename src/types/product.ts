export interface Product {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung';
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}