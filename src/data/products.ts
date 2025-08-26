import { Product } from '../types/product';

// Import product images
import iphone15ProMax from '../assets/iphone-15-pro-max.jpg';
import iphone14 from '../assets/iphone-14.jpg';
import iphone13 from '../assets/iphone-13.jpg';
import iphoneSE from '../assets/iphone-se.jpg';
import samsungS24Ultra from '../assets/samsung-s24-ultra.jpg';
import samsungS23 from '../assets/samsung-s23.jpg';
import samsungZFold5 from '../assets/samsung-z-fold-5.jpg';

export const products: Product[] = [
  // iPhone Products
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 1199,
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and Pro camera system.',
    image: iphone15ProMax,
    features: ['6.7" Super Retina XDR display', 'A17 Pro chip', '48MP Pro camera system', 'Titanium design'],
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    price: 899,
    originalPrice: 999,
    description: 'Advanced dual-camera system with incredible computational photography features.',
    image: iphone14,
    features: ['6.1" Super Retina XDR display', 'A15 Bionic chip', 'Dual-camera system', 'Ceramic Shield'],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    brand: 'Apple',
    price: 699,
    originalPrice: 799,
    description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip.',
    image: iphone13,
    features: ['6.1" Super Retina XDR display', 'A15 Bionic chip', 'Dual-camera system', 'All-day battery life'],
    inStock: true
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    brand: 'Apple',
    price: 429,
    description: 'The power of A15 Bionic in our most affordable iPhone. Classic design meets modern performance.',
    image: iphoneSE,
    features: ['4.7" Retina HD display', 'A15 Bionic chip', 'Single-camera system', 'Touch ID'],
    inStock: true
  },
  
  // Samsung Products
  {
    id: 'samsung-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1199,
    description: 'The ultimate Galaxy experience with S Pen, 200MP camera, and AI-powered features.',
    image: samsungS24Ultra,
    features: ['6.8" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 3', '200MP camera system', 'Built-in S Pen'],
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'samsung-s23',
    name: 'Galaxy S23',
    brand: 'Samsung',
    price: 999,
    originalPrice: 1099,
    description: 'Premium Galaxy experience with enhanced night photography and all-day battery.',
    image: samsungS23,
    features: ['6.1" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 2', '50MP camera system', 'Wireless charging'],
    inStock: true
  },
  {
    id: 'samsung-z-fold-5',
    name: 'Galaxy Z Fold5',
    brand: 'Samsung',
    price: 1799,
    description: 'The most powerful Galaxy yet. Unfold your world with the ultimate multitasking experience.',
    image: samsungZFold5,
    features: ['7.6" Main Display', 'Snapdragon 8 Gen 2', 'Flex Mode', 'Multi-window support'],
    inStock: true,
    isNew: true
  }
];

export const getBrandProducts = (brand: 'Apple' | 'Samsung') => {
  return products.filter(product => product.brand === brand);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};