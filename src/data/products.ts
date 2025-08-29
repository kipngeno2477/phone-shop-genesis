import { Product } from '../types/product';

export const products: Product[] = [

  {
    id: 'samsung-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 175000,
    description: 'The ultimate Galaxy experience with S Pen, 200MP camera, and AI-powered features.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=80',
    features: ['6.8" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 3', '200MP camera system', 'Built-in S Pen'],
    inStock: true,
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'samsung-s24-plus',
    name: 'Galaxy S24 Plus',
    brand: 'Samsung',
    price: 155000,
    description: 'Bigger display and battery for power users.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=80',
    features: ['6.7" Dynamic AMOLED', 'Snapdragon 8 Gen 3', 'Pro-level camera', 'Strong battery'],
    inStock: true
  },
  {
    id: 'samsung-s24',
    name: 'Galaxy S24',
    brand: 'Samsung',
    price: 135000,
    description: 'Flagship Galaxy performance in a compact form.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=80',
    features: ['6.2" Dynamic AMOLED', 'Snapdragon 8 Gen 3', 'Excellent camera', 'AI features'],
    inStock: true
  },
  {
    id: 'samsung-s23-ultra',
    name: 'Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 160000,
    originalPrice: 180000,
    description: 'Premium Galaxy with S Pen and advanced camera system.',
    image: 'https://images.unsplash.com/photo-1678381937438-53b19c004d0c?w=600&h=600&fit=crop&q=80',
    features: ['6.8" Dynamic AMOLED', 'Snapdragon 8 Gen 2', '200MP camera', 'S Pen included'],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 'samsung-s23-plus',
    name: 'Galaxy S23 Plus',
    brand: 'Samsung',
    price: 140000,
    description: 'Large display Galaxy with premium features.',
    image: 'https://images.unsplash.com/photo-1678381937438-53b19c004d0c?w=600&h=600&fit=crop&q=80',
    features: ['6.6" Dynamic AMOLED', 'Snapdragon 8 Gen 2', 'Triple camera', 'Fast charging'],
    inStock: true
  },
  {
    id: 'samsung-s23',
    name: 'Galaxy S23',
    brand: 'Samsung',
    price: 125000,
    originalPrice: 145000,
    description: 'Premium Galaxy experience with enhanced night photography and all-day battery.',
    image: 'https://images.unsplash.com/photo-1678381937438-53b19c004d0c?w=600&h=600&fit=crop&q=80',
    features: ['6.1" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 2', '50MP camera system', 'Wireless charging'],
    inStock: true
  },
  {
    id: 'samsung-z-fold5',
    name: 'Galaxy Z Fold5',
    brand: 'Samsung',
    price: 245000,
    description: 'The most powerful Galaxy yet. Unfold your world with the ultimate multitasking experience.',
    image: 'https://images.unsplash.com/photo-1685520610290-39ffc3131ffa?w=600&h=600&fit=crop&q=80',
    features: ['7.6" Main Display', 'Snapdragon 8 Gen 2', 'Flex Mode', 'Multi-window support'],
    inStock: true,
    isNew: true
  },
  {
    id: 'samsung-z-flip5',
    name: 'Galaxy Z Flip5',
    brand: 'Samsung',
    price: 170000,
    description: 'Compact foldable with a sleek design and versatile camera.',
    image: 'https://images.unsplash.com/photo-1685520610290-39ffc3131ffa?w=600&h=600&fit=crop&q=80',
    features: ['Foldable display', 'Snapdragon 8 Gen 2', 'Flex Window', 'Compact when closed'],
    inStock: true,
    isNew: true
  },
  {
    id: 'samsung-a54',
    name: 'Galaxy A54',
    brand: 'Samsung',
    price: 45000,
    description: 'Mid-range phone with balanced performance and battery life.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&q=80',
    features: ['6.4" Super AMOLED', 'Exynos 1380', 'Solid battery', 'Good cameras'],
    inStock: true
  },
  {
    id: 'samsung-a34',
    name: 'Galaxy A34',
    brand: 'Samsung',
    price: 38000,
    description: 'Affordable smartphone with great display and cameras.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&q=80',
    features: ['6.6" Super AMOLED', 'MediaTek Dimensity', 'Good cameras', 'Long battery'],
    inStock: true
  },
  {
    id: 'samsung-a14',
    name: 'Galaxy A14',
    brand: 'Samsung',
    price: 25000,
    description: 'Budget-friendly smartphone with essential features.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&q=80',
    features: ['6.6" PLS LCD', 'MediaTek Helio', 'Triple camera', 'Expandable storage'],
    inStock: true
  },
  {
    id: 'samsung-m54',
    name: 'Galaxy M54',
    brand: 'Samsung',
    price: 42000,
    description: 'Mid-range phone with focus on battery life.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&q=80',
    features: ['6.7" Super AMOLED', 'Exynos 1380', '6000mAh battery', 'Good performance'],
    inStock: true
  },
  {
    id: 'samsung-f54',
    name: 'Galaxy F54',
    brand: 'Samsung',
    price: 40000,
    description: 'Feature-packed smartphone with great camera system.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&q=80',
    features: ['6.7" Super AMOLED', 'Exynos 1380', '108MP camera', 'Good battery'],
    inStock: true
  },
  {
    id: 'samsung-s22-ultra',
    name: 'Galaxy S22 Ultra',
    brand: 'Samsung',
    price: 140000,
    originalPrice: 160000,
    description: 'Previous flagship with S Pen and excellent cameras.',
    image: 'https://images.unsplash.com/photo-1649180556195-9c5a0cdc2d5c?w=600&h=600&fit=crop&q=80',
    features: ['6.8" Dynamic AMOLED', 'Snapdragon 8 Gen 1', '108MP camera', 'S Pen support'],
    inStock: true
  },
  {
    id: 'samsung-s22-plus',
    name: 'Galaxy S22 Plus',
    brand: 'Samsung',
    price: 120000,
    description: 'Large display flagship with premium features.',
    image: 'https://images.unsplash.com/photo-1649180556195-9c5a0cdc2d5c?w=600&h=600&fit=crop&q=80',
    features: ['6.6" Dynamic AMOLED', 'Snapdragon 8 Gen 1', 'Triple camera', 'Fast charging'],
    inStock: true
  },
  {
    id: 'samsung-s22',
    name: 'Galaxy S22',
    brand: 'Samsung',
    price: 105000,
    description: 'Compact flagship with powerful performance.',
    image: 'https://images.unsplash.com/photo-1649180556195-9c5a0cdc2d5c?w=600&h=600&fit=crop&q=80',
    features: ['6.1" Dynamic AMOLED', 'Snapdragon 8 Gen 1', 'Triple camera', 'Wireless charging'],
    inStock: true
  },
  {
    id: 'samsung-s21-fe',
    name: 'Galaxy S21 FE',
    brand: 'Samsung',
    price: 85000,
    description: 'Fan edition with flagship features at a better price.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=80',
    features: ['6.4" Dynamic AMOLED', 'Snapdragon 888', 'Triple camera', 'All-day battery'],
    inStock: true
  },
  {
    id: 'samsung-s20-fe',
    name: 'Galaxy S20 FE',
    brand: 'Samsung',
    price: 65000,
    description: 'Popular fan edition with great value.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop&q=80',
    features: ['6.5" Super AMOLED', 'Snapdragon 865', 'Triple camera', '120Hz display'],
    inStock: true
  },
  {
    id: 'samsung-note20-ultra',
    name: 'Galaxy Note20 Ultra',
    brand: 'Samsung',
    price: 130000,
    originalPrice: 150000,
    description: 'Last of the Note series with S Pen and premium features.',
    image: 'https://images.unsplash.com/photo-1598324789736-4861f89564a0?w=600&h=600&fit=crop&q=80',
    features: ['6.9" Dynamic AMOLED', 'Snapdragon 865+', '108MP camera', 'S Pen included'],
    inStock: true
  },
  {
    id: 'samsung-z-fold4',
    name: 'Galaxy Z Fold4',
    brand: 'Samsung',
    price: 210000,
    description: 'Previous generation foldable with great multitasking.',
    image: 'https://images.unsplash.com/photo-1662941485888-c94d15cda0e8?w=600&h=600&fit=crop&q=80',
    features: ['7.6" Main Display', 'Snapdragon 8+ Gen 1', 'Under-display camera', 'Multi-tasking'],
    inStock: true
  },

  {
    id: 'hp-elitebook-840-g10',
    name: 'HP EliteBook 840 G10',
    brand: 'Laptops',
    price: 81250,
    description: 'i7 (13th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61e8YDC5lsL._AC_UY218_.jpg',
    features: ['i7 13th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true,
    isNew: true
  },
  {
    id: 'hp-elitebook-840-g9-i7',
    name: 'HP EliteBook 840 G9',
    brand: 'Laptops',
    price: 68750,
    description: 'i7 (12th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/81nmgaAQBlL._AC_UY218_.jpg',
    features: ['i7 12th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g9-i5',
    name: 'HP EliteBook 840 G9',
    brand: 'Laptops',
    price: 56250,
    description: 'i5 (12th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61cchgUmecL._AC_SX425_.jpg',
    features: ['i5 12th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g8-i7',
    name: 'HP EliteBook 840 G8',
    brand: 'Laptops',
    price: 56250,
    description: 'i7 (11th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61DIr6j2hzL._AC_SX425_.jpg',
    features: ['i7 11th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g8-i5',
    name: 'HP EliteBook 840 G8',
    brand: 'Laptops',
    price: 43750,
    description: 'i5 (11th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61CpkecRYPL._AC_SX425_.jpg',
    features: ['i5 11th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g7-i7-512',
    name: 'HP EliteBook 840 G7',
    brand: 'Laptops',
    price: 47500,
    description: 'i7 (10th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/51QOSm7-7mL._AC_SX425_.jpg',
    features: ['i7 10th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g7-i7-256',
    name: 'HP EliteBook 840 G7',
    brand: 'Laptops',
    price: 40000,
    description: 'i7 (10th Gen) – 16GB Ram – 256GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/71ThatPc3yL._AC_SX425_.jpg',
    features: ['i7 10th Gen', '16GB RAM', '256GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g7-i5',
    name: 'HP EliteBook 840 G7',
    brand: 'Laptops',
    price: 41250,
    description: 'i5 (10th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/618SEZ7McKL._AC_SX425_.jpg',
    features: ['i5 10th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g6',
    name: 'HP EliteBook 840 G6',
    brand: 'Laptops',
    price: 40000,
    description: 'i7 (8th Gen) – 16GB Ram – 512GB SSD – 14" Touch display',
    image: 'https://m.media-amazon.com/images/I/91W+kW4VUZL._AC_SX425_.jpg',
    features: ['i7 8th Gen', '16GB RAM', '512GB SSD', '14" Touch'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g5-i7-8gb',
    name: 'HP EliteBook 840 G5',
    brand: 'Laptops',
    price: 33000,
    description: 'i7 (8th Gen) – 8GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/71NyqMVjKeL._AC_SX425_.jpg',
    features: ['i7 8th Gen', '8GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g5-i7-16gb',
    name: 'HP EliteBook 840 G5',
    brand: 'Laptops',
    price: 36000,
    description: 'i7 (8th Gen) – 16GB Ram – 512GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/51ug1GsL7fL._AC_SX425_.jpg',
    features: ['i7 8th Gen', '16GB RAM', '512GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g4',
    name: 'HP EliteBook 840 G4',
    brand: 'Laptops',
    price: 25000,
    description: 'i5 (7th Gen) – 8GB Ram – 256GB SSD – 14" Touch display',
    image: 'https://m.media-amazon.com/images/I/81mYNL-m2DL._AC_SL1500_.jpg',
    features: ['i5 7th Gen', '8GB RAM', '256GB SSD', '14" Touch'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g3',
    name: 'HP EliteBook 840 G3',
    brand: 'Laptops',
    price: 23500,
    description: 'i5 (6th Gen) – 8GB Ram – 256GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61PrrvBXAkL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    features: ['i5 6th Gen', '8GB RAM', '256GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g2',
    name: 'HP EliteBook 840 G2',
    brand: 'Laptops',
    price: 18500,
    description: 'i5 (5th Gen) – 8GB Ram – 500GB SSHDD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61vI0ND-dWL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
    features: ['i5 5th Gen', '8GB RAM', '500GB SSHDD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-840-g1',
    name: 'HP EliteBook 840 G1',
    brand: 'Laptops',
    price: 20000,
    description: 'i5 (4th Gen) – 8GB Ram – 256GB SSD – 14" display',
    image: 'https://m.media-amazon.com/images/I/61KSzFxwGHS._AC_SL1500_.jpg',
    features: ['i5 4th Gen', '8GB RAM', '256GB SSD', '14" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-820-g3',
    name: 'HP EliteBook 820 G3',
    brand: 'Laptops',
    price: 21500,
    description: 'i5 (6th Gen) – 8GB Ram – 256GB SSD – 12.5" display',
    image: 'https://m.media-amazon.com/images/I/61EIuXpvzEL._AC_SL1500_.jpg',
    features: ['i5 6th Gen', '8GB RAM', '256GB SSD', '12.5" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-820-g1-hdd',
    name: 'HP EliteBook 820 G1',
    brand: 'Laptops',
    price: 18000,
    description: 'i5 (4th Gen) – 8GB Ram – 500GB HDD – 12.5" display',
    image: 'https://m.media-amazon.com/images/I/71vSC5vqQJL._AC_SX425_.jpg',
    features: ['i5 4th Gen', '8GB RAM', '500GB HDD', '12.5" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-820-g1-ssd',
    name: 'HP EliteBook 820 G1',
    brand: 'Laptops',
    price: 19500,
    description: 'i5 (4th Gen) – 8GB Ram – 256GB SSD – 12.5" display',
    image: 'https://m.media-amazon.com/images/I/61rFa+RkorL._AC_SX425_.jpg',
    features: ['i5 4th Gen', '8GB RAM', '256GB SSD', '12.5" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-830-g9',
    name: 'HP EliteBook 830 G9',
    brand: 'Laptops',
    price: 62500,
    description: 'i7 (12th Gen) – 16GB Ram – 512GB SSD – 13.3" display',
    image: 'https://m.media-amazon.com/images/I/61HsnV8L7uL._AC_SX679_.jpg',
    features: ['i7 12th Gen', '16GB RAM', '512GB SSD', '13.3" Display'],
    inStock: true
  },
  {
    id: 'hp-elitebook-830-g8-i7',
    name: 'HP EliteBook 830 G8',
    brand: 'Laptops',
    price: 50000,
    description: 'i7 (11th Gen) – 16GB Ram – 512GB SSD – 13.3" display',
    image: 'https://m.media-amazon.com/images/I/61V-l6vc+bL._AC_SX425_.jpg',
    features: ['i7 11th Gen', '16GB RAM', '512GB SSD', '13.3" Display'],
    inStock: true
  },
  // iPhone Products (20 items)
{
id: 'iphone-xr-128gb',
name: 'iPhone XR 128GB',
brand: 'Apple',
price: 27000,
description: 'Feature-packed iPhone with Liquid Retina display and A12 Bionic chip.',
image: 'https://m.media-amazon.com/images/I/61lvuOnNpjL._AC_SX569_.jpg',
features: ['6.1" Liquid Retina HD', 'A12 Bionic chip', 'Single-camera system', 'Face ID'],
inStock: true
},
{
id: 'iphone-11-64gb',
name: 'iPhone 11 64GB',
brand: 'Apple',
price: 27000,
description: 'Dual camera system with Night mode and Ultra Wide.',
image: 'https://m.media-amazon.com/images/I/61MG3m5FhIL._AC_SY606_.jpg',
features: ['6.1" Liquid Retina', 'A13 Bionic', 'Dual camera', 'Night mode'],
inStock: true
},
{
id: 'iphone-11-pro-256gb',
name: 'iPhone 11 Pro 256GB',
brand: 'Apple',
price: 41000,
description: 'Pro camera system with advanced computational photography.',
image: 'https://m.media-amazon.com/images/I/61UC1mk6dfL._AC_SX569_.jpg',
features: ['5.8" Super Retina XDR', 'A13 Bionic', 'Triple camera', '4K video'],
inStock: true
},
{
id: 'iphone-12-pro-128gb',
name: 'iPhone 12 Pro 128GB',
brand: 'Apple',
price: 43000,
description: 'Premium iPhone with pro features and 5G connectivity.',
image: 'https://m.media-amazon.com/images/I/61l3+VGfj2L._AC_SX569_.jpg',
features: ['6.1" Super Retina XDR', 'A14 Bionic', 'Triple camera', '5G support'],
inStock: true
},
{
id: 'iphone-12-pro-256gb',
name: 'iPhone 12 Pro 256GB',
brand: 'Apple',
price: 50000,
description: 'Premium iPhone with pro features and 5G connectivity.',
image: 'https://m.media-amazon.com/images/I/31DXs7b1j2L._AC_.jpg',
features: ['6.1" Super Retina XDR', 'A14 Bionic', 'Triple camera', '5G support'],
inStock: true
},
{
id: 'iphone-13-128gb',
name: 'iPhone 13 128GB',
brand: 'Apple',
price: 48000,
description: 'The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip.',
image: 'https://m.media-amazon.com/images/I/617ZVzuDH9L._AC_SL1500_.jpg',
features: ['6.1" Super Retina XDR', 'A15 Bionic chip', 'Dual-camera system', 'All-day battery life'],
inStock: true
},
{
id: 'iphone-13-mini-128gb',
name: 'iPhone 13 Mini 128GB',
brand: 'Apple',
price: 42000,
description: 'Compact and capable iPhone with great battery and camera.',
image: 'https://m.media-amazon.com/images/I/614melk2FIL._AC_SY606_.jpg',
features: ['5.4" display', 'A15 Bionic chip', 'Compact form', 'Great camera'],
inStock: true
},
{
id: 'iphone-13-pro-256gb',
name: 'iPhone 13 Pro 256GB',
brand: 'Apple',
price: 66000,
description: 'Compact Pro model with professional features.',
image: 'https://m.media-amazon.com/images/I/61GtmYgx8QL._AC_SL1500_.jpg',
features: ['6.1" Pro display', 'A15 Bionic', 'Pro cameras', 'Cinematic mode'],
inStock: true
},
{
id: 'iphone-13-pro-max-256gb',
name: 'iPhone 13 Pro Max 256GB',
brand: 'Apple',
price: 78000,
description: 'Pro camera system with Cinematic mode and Photographic Styles.',
image: 'https://m.media-amazon.com/images/I/51UtM-A3fdL._AC_SX569_.jpg',
features: ['6.7" ProMotion', 'A15 Bionic', 'Pro camera system', 'Cinematic mode'],
inStock: true
},
{
id: 'iphone-14-pro-256gb',
name: 'iPhone 14 Pro 256GB',
brand: 'Apple',
price: 79000,
description: 'Pro camera system with powerful performance.',
image: 'https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX569_.jpg',
features: ['6.1" Pro display', 'A16 Bionic', 'Pro camera system', 'Dynamic Island'],
inStock: true
},
{
id: 'iphone-14-pro-512gb',
name: 'iPhone 14 Pro 512GB',
brand: 'Apple',
price: 83000,
description: 'Pro camera system with powerful performance and extra storage.',
image: 'https://m.media-amazon.com/images/I/510sfX+lqCL._AC_SL1000_.jpg',
features: ['6.1" Pro display', 'A16 Bionic', 'Pro camera system', 'Dynamic Island', '512GB storage'],
inStock: true
},
{
id: 'iphone-14-pro-max-256gb',
name: 'iPhone 14 Pro Max 256GB',
brand: 'Apple',
price: 93000,
description: 'Powerful Pro model with Dynamic Island and Always-On display.',
image: 'https://m.media-amazon.com/images/I/51KLILQ67nL._AC_SX569_.jpg',
features: ['6.7" ProMotion', 'A16 Bionic', '48MP Main camera', 'Dynamic Island'],
inStock: true,
isBestSeller: true
},
{
id: 'iphone-15-pro-256gb',
name: 'iPhone 15 Pro 256GB',
brand: 'Apple',
price: 107000,
description: 'Premium iPhone with pro features and titanium construction.',
image: 'https://m.media-amazon.com/images/I/31GYqiDkKTL._AC_.jpg',
features: ['6.1" Super Retina XDR', 'A17 Pro chip', 'Pro camera system', 'Titanium'],
inStock: true,
isNew: true
},
{
id: 'iphone-15-pro-max-256gb',
name: 'iPhone 15 Pro Max 256GB',
brand: 'Apple',
price: 120000,
description: 'The ultimate iPhone with titanium design, A17 Pro chip, and Pro camera system.',
image: 'https://m.media-amazon.com/images/I/41HuQPBFjOL._AC_SX569_.jpg',
features: ['6.7" Super Retina XDR display', 'A17 Pro chip', '48MP Pro camera system', 'Titanium design'],
inStock: true,
isNew: true,
isBestSeller: true
},
{
id: 'iphone-16-pro-256gb',
name: 'iPhone 16 Pro 256GB',
brand: 'Apple',
price: 160000,
description: 'Next-generation iPhone with advanced features and performance. (Predicted model)',
image: 'https://m.media-amazon.com/images/I/51FGrkIA-qL._AC_SX679_.jpg',
features: ['6.3" ProMotion display', 'A18 Pro chip', 'Enhanced camera system', 'Titanium design'],
inStock: true,
isNew: true
},
{
id: 'iphone-16-pro-max-256gb',
name: 'iPhone 16 Pro Max 256GB',
brand: 'Apple',
price: 170000,
description: 'Flagship next-generation iPhone with max features. (Predicted model)',
image: 'https://m.media-amazon.com/images/I/617OBw7dFnL._AC_SX466_.jpg',
features: ['6.9" ProMotion display', 'A18 Pro chip', 'Advanced camera system', 'Titanium design'],
inStock: true,
isNew: true,
isBestSeller: true
},

  // Samsung Products (20 items)
  
{
id: 'samsung-a12-6gb-128gb',
name: 'Galaxy A12 6GB/128GB',
brand: 'Samsung',
price: 9000,
description: 'Budget smartphone with ample RAM and storage.',
image: 'https://m.media-amazon.com/images/I/91MYZ050dYS._AC_SX569_.jpg',
features: ['6.5" PLS LCD', 'MediaTek Helio P35', 'Quad camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a15-8gb-128gb',
name: 'Galaxy A15 8GB/128GB',
brand: 'Samsung',
price: 16500,
description: 'Mid-range smartphone with generous RAM and storage.',
image: 'https://m.media-amazon.com/images/I/51DE5TgJXIL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
features: ['6.5" Super AMOLED', 'MediaTek Helio G99', 'Triple camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a16-8gb-128gb',
name: 'Galaxy A16 8GB/128GB',
brand: 'Samsung',
price: 19500,
description: 'Feature-rich smartphone with excellent performance.',
image: 'https://m.media-amazon.com/images/I/41uGf1Z037L._AC_SY606_.jpg',
features: ['6.6" Super AMOLED', 'MediaTek Helio G99', 'Quad camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a33-8gb-128gb',
name: 'Galaxy A33 8GB/128GB',
brand: 'Samsung',
price: 34000,
description: '5G capable mid-range smartphone with good performance.',
image: 'https://m.media-amazon.com/images/I/61R1nuqB41L._AC_SX569_.jpg',
features: ['6.4" Super AMOLED', 'Exynos 1280', 'Quad camera', 'IP67 water resistance'],
inStock: true
},
{
id: 'samsung-a23-8gb-128gb',
name: 'Galaxy A23 8GB/128GB',
brand: 'Samsung',
price: 15500,
description: 'Balanced smartphone with good camera capabilities.',
image: 'https://m.media-amazon.com/images/I/611g3QkCRdL._AC_SX569_.jpg',
features: ['6.6" PLS LCD', 'Snapdragon 680', 'Quad camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a24-8gb-128gb',
name: 'Galaxy A24 8GB/128GB',
brand: 'Samsung',
price: 16000,
description: 'Modern smartphone with updated features.',
image: 'https://i.pinimg.com/736x/d5/a8/ff/d5a8ffaa93ce7311ad08adbfe578410e.jpg',
features: ['6.5" Super AMOLED', 'MediaTek Helio G99', 'Triple camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a71-8gb-128gb',
name: 'Galaxy A71 8GB/128GB',
brand: 'Samsung',
price: 19000,
description: 'Popular mid-range smartphone with excellent features.',
image: 'https://i.pinimg.com/736x/1a/88/cd/1a88cddaa4e92d95d4140f9566fd33aa.jpg',
features: ['6.7" Super AMOLED Plus', 'Snapdragon 730', 'Quad camera', '4500mAh battery'],
inStock: true
},
{
id: 'samsung-a54-8gb-128gb',
name: 'Galaxy A54 8GB/128GB',
brand: 'Samsung',
price: 25000,
description: 'Premium mid-range smartphone with flagship-like features.',
image: 'https://i.pinimg.com/736x/19/3b/8c/193b8c325a95bf1ad6395003feb69366.jpg',
features: ['6.4" Super AMOLED', 'Exynos 1380', 'Triple camera', 'IP67 water resistance'],
inStock: true
},
{
id: 'samsung-a53-8gb-128gb',
name: 'Galaxy A53 8GB/128GB',
brand: 'Samsung',
price: 21500,
description: '5G capable smartphone with excellent battery life.',
image: 'https://i.pinimg.com/736x/e7/37/13/e73713b01e5c7c572efd951700be512f.jpg',
features: ['6.5" Super AMOLED', 'Exynos 1280', 'Quad camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-a34-8gb-128gb',
name: 'Galaxy A34 8GB/128GB',
brand: 'Samsung',
price: 19000,
description: '5G smartphone with great display and performance.',
image: 'https://i.pinimg.com/736x/b6/c8/8d/b6c88d438f98a61fa93e58446f2a3803.jpg',
features: ['6.6" Super AMOLED', 'MediaTek Dimensity 1080', 'Triple camera', '5000mAh battery'],
inStock: true
},
{
id: 'samsung-note20-ultra-12gb-256gb',
name: 'Galaxy Note20 Ultra 12GB/256GB',
brand: 'Samsung',
price: 48000,
description: 'Flagship Note series with S Pen and premium features.',
image: 'https://i.pinimg.com/736x/c1/30/f4/c130f47b388cda04b1e76744cc40b863.jpg',
features: ['6.9" Dynamic AMOLED', 'Snapdragon 865+', '108MP camera', 'S Pen included'],
inStock: true
},
{
id: 'samsung-s21-ultra-12gb-256gb',
name: 'Galaxy S21 Ultra 12GB/256GB',
brand: 'Samsung',
price: 47000,
description: 'Premium flagship with advanced camera system.',
image: 'https://i.pinimg.com/1200x/b8/a9/83/b8a983ba705710f1a3079f6d7c91b54d.jpg',
features: ['6.8" Dynamic AMOLED', 'Exynos 2100', '108MP camera', 'S Pen support'],
inStock: true
},
{
id: 'samsung-s22-8gb-256gb',
name: 'Galaxy S22 8GB/256GB',
brand: 'Samsung',
price: 35000,
description: 'Compact flagship with powerful performance.',
image: 'https://i.pinimg.com/1200x/6e/23/ac/6e23ac93b330ac4b002e5910108e718a.jpg',
features: ['6.1" Dynamic AMOLED', 'Snapdragon 8 Gen 1', 'Triple camera', 'Wireless charging'],
inStock: true
},
{
id: 'samsung-s22-ultra-12gb-256gb',
name: 'Galaxy S22 Ultra 12GB/256GB',
brand: 'Samsung',
price: 62000,
description: 'Flagship with S Pen and excellent cameras.',
image: 'https://i.pinimg.com/736x/fa/bf/a4/fabfa4f7a1eb8a69a3a0852b706fde4d.jpg',
features: ['6.8" Dynamic AMOLED', 'Snapdragon 8 Gen 1', '108MP camera', 'S Pen included'],
inStock: true
},
{
id: 'samsung-s23-8gb-256gb',
name: 'Galaxy S23 8GB/256GB',
brand: 'Samsung',
price: 48000,
description: 'Premium Galaxy experience with enhanced performance.',
image: 'https://i.pinimg.com/736x/d1/16/73/d11673588a10a2b1aee49688c07f393b.jpg',
features: ['6.1" Dynamic AMOLED', 'Snapdragon 8 Gen 2', 'Triple camera', 'All-day battery'],
inStock: true
},
{
id: 'samsung-s23-ultra-12gb-256gb',
name: 'Galaxy S23 Ultra 12GB/256GB',
brand: 'Samsung',
price: 74000,
description: 'Premium Galaxy with S Pen and advanced camera system.',
image: 'https://i.pinimg.com/736x/79/4e/21/794e217fbb48607eb47bc86ef50cd46a.jpg',
features: ['6.8" Dynamic AMOLED', 'Snapdragon 8 Gen 2', '200MP camera', 'S Pen included'],
inStock: true
},
{
id: 'samsung-s24-8gb-256gb',
name: 'Galaxy S24 8GB/256GB',
brand: 'Samsung',
price: 62000,
description: 'Flagship Galaxy performance in a compact form.',
image: 'https://i.pinimg.com/736x/ec/9e/eb/ec9eeb6f27e43ec12f9db1efb4079fad.jpg',
features: ['6.2" Dynamic AMOLED', 'Snapdragon 8 Gen 3', 'Excellent camera', 'AI features'],
inStock: true
},
{
id: 'samsung-s24-ultra-12gb-256gb',
name: 'Galaxy S24 Ultra 12GB/256GB',
brand: 'Samsung',
price: 99000,
description: 'The ultimate Galaxy experience with S Pen and AI-powered features.',
image: 'https://i.pinimg.com/736x/1c/28/fd/1c28fdb5366ea59fd98c2145e48b655f.jpg',
features: ['6.8" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 3', '200MP camera system', 'Built-in S Pen'],
inStock: true,
isNew: true,
isBestSeller: true
},
{
id: 'samsung-s25-ultra-12gb-256gb',
name: 'Galaxy S25 Ultra 12GB/256GB',
brand: 'Samsung',
price: 119000,
description: 'Next-generation flagship with advanced features. (Predicted model)',
image: 'https://i.pinimg.com/736x/ff/73/04/ff73047e787d08478650b4edd78a4e31.jpg',
features: ['6.9" Dynamic AMOLED', 'Snapdragon 8 Gen 4', 'Advanced camera system', 'Enhanced S Pen'],
inStock: true,
isNew: true
},
{
id: 'samsung-s20-fe-5g-8gb-256gb',
name: 'Galaxy S20 FE 5G 8GB/256GB',
brand: 'Samsung',
price: 21500,
description: 'Popular fan edition with great value and 5G connectivity.',
image: 'https://i.pinimg.com/736x/4a/e6/1c/4ae61c794aeb1f967d47007be91245b2.jpg',
features: ['6.5" Super AMOLED', 'Snapdragon 865', 'Triple camera', '120Hz display', '5G'],
inStock: true
},
{
id: 'samsung-s24-fe-5g-8gb-256gb',
name: 'Galaxy S24 FE 5G 8GB/256GB',
brand: 'Samsung',
price: 58000,
description: 'Fan edition with flagship features at a better price.',
image: 'https://i.pinimg.com/1200x/f4/1f/5b/f41f5b08e04cd2a47868c56a34476907.jpg',
features: ['6.4" Dynamic AMOLED', 'Snapdragon 8 Gen 2', 'Triple camera', '120Hz display', '5G'],
inStock: true
},
{
id: 'samsung-z-fold4-12gb-512gb',
name: 'Galaxy Z Fold4 12GB/512GB',
brand: 'Samsung',
price: 70000,
description: 'Foldable smartphone with great multitasking capabilities.',
image: 'https://i.pinimg.com/736x/1b/c6/1d/1bc61d2f8bf09fc1bf1b6794b111f709.jpg',
features: ['7.6" Main Display', 'Snapdragon 8+ Gen 1', 'Under-display camera', 'Multi-tasking'],
inStock: true
},

  // Accessories Products (20 items)
{
id: 'iphone-tempered-glass',
name: 'iPhone Tempered Glass Protector',
brand: 'Accessories',
price: 800,
description: 'High clarity tempered glass screen protector designed specifically for iPhone models.',
image: 'https://i.pinimg.com/1200x/c0/65/6a/c0656a8832a6f75ec0c977f6f17567ab.jpg',
features: ['9H hardness', 'Oleophobic coating', 'Case friendly', 'Easy installation', 'Model specific'],
inStock: true
},
{
id: 'samsung-tempered-glass',
name: 'Samsung Tempered Glass Protector',
brand: 'Accessories',
price: 700,
description: 'Premium tempered glass screen protector for Samsung Galaxy models.',
image: 'https://i.pinimg.com/1200x/d2/14/20/d2142041d90323e34b8d4d0e3c250e0e.jpg',
features: ['9H hardness', 'Oleophobic coating', 'Curve edge design', 'Easy installation', 'Model specific'],
inStock: true
},
{
id: 'universal-tempered-glass',
name: 'Universal Tempered Glass Protector',
brand: 'Accessories',
price: 500,
description: 'Quality tempered glass protector that fits most smartphone models.',
image: 'https://i.pinimg.com/736x/59/56/1c/59561c1b3e15880a68b360710e37b4c0.jpg',
features: ['9H hardness', 'Oleophobic coating', 'Universal fit', 'Easy installation', 'Budget friendly'],
inStock: true
},
{
id: 'iphone-silicone-case',
name: 'iPhone Silicone Case',
brand: 'Accessories',
price: 1500,
description: 'Official-style silicone case with perfect fit for iPhone models.',
image: 'https://i.pinimg.com/736x/9b/a4/be/9ba4be5d0fab6eedd2c83d55de4910b6.jpg',
features: ['Soft-touch silicone', 'Raised camera lip', 'Precise cutouts', 'Multiple colors', 'Wireless charging compatible'],
inStock: true
},
{
id: 'samsung-silicone-case',
name: 'Samsung Silicone Case',
brand: 'Accessories',
price: 1400,
description: 'Soft silicone case designed specifically for Samsung Galaxy models.',
image: 'https://i.pinimg.com/1200x/30/2d/96/302d96b5ddbc5ceab1bbc61a6ed399cc.jpg',
features: ['Soft-touch', 'Raised camera lip', 'Slim fit', 'Multiple colors', 'Model specific'],
inStock: true
},
{
id: 'iphone-clear-case',
name: 'iPhone Clear Case',
brand: 'Accessories',
price: 1200,
description: 'Crystal clear case that shows off your iPhone while providing protection.',
image: 'https://i.pinimg.com/736x/4d/cc/88/4dcc8842ff27e0a0ba390e1cedd922ed.jpg',
features: ['Crystal clear', 'Yellowing resistant', 'Raised edges', 'Wireless charging compatible', 'Scratch resistant'],
inStock: true
},
{
id: 'samsung-clear-case',
name: 'Samsung Clear Case',
brand: 'Accessories',
price: 1100,
description: 'Transparent case that maintains the original look of your Samsung phone.',
image: 'https://i.pinimg.com/1200x/6c/f4/c2/6cf4c248915a0e1275a1c3dc20af7b19.jpg',
features: ['Crystal clear', 'Yellowing resistant', 'Precise cutouts', 'Slim profile', 'Model specific'],
inStock: true
},
{
id: 'iphone-leather-case',
name: 'iPhone Leather Case',
brand: 'Accessories',
price: 2800,
description: 'Premium genuine leather case for iPhone with luxurious feel.',
image: 'https://i.pinimg.com/1200x/a0/c0/1d/a0c01d753513b145a29d4be87bd9aa43.jpg',
features: ['Genuine leather', 'Ages beautifully', 'Raised camera lip', 'Slim profile', 'Wireless charging compatible'],
inStock: true
},
{
id: 'samsung-leather-case',
name: 'Samsung Leather Case',
brand: 'Accessories',
price: 2600,
description: 'High-quality leather case designed for Samsung Galaxy models.',
image: 'https://i.pinimg.com/1200x/6c/f4/c2/6cf4c248915a0e1275a1c3dc20af7b19.jpg',
features: ['Premium leather', 'Protective design', 'Precise cutouts', 'Comfortable grip', 'Model specific'],
inStock: true
},
{
id: 'iphone-wallet-case',
name: 'iPhone Wallet Case',
brand: 'Accessories',
price: 2200,
description: 'Convenient wallet case with card slots for your iPhone.',
image: 'https://i.pinimg.com/1200x/24/e9/76/24e976296f16c1af260ec01d1134123a.jpg',
features: ['3 card slots', 'Magnetic closure', 'Kickstand function', 'RFID blocking', 'All-in-one design'],
inStock: true
},
{
id: 'samsung-wallet-case',
name: 'Samsung Wallet Case',
brand: 'Accessories',
price: 2000,
description: 'Practical wallet case with card storage for Samsung phones.',
image: 'https://i.pinimg.com/1200x/a6/2f/76/a62f76041dae042adbcc42983587da13.jpg',
features: ['Card storage', 'Magnetic closure', 'Stand function', 'Protective design', 'Model specific'],
inStock: true
},
{
id: 'iphone-rugged-case',
name: 'iPhone Rugged Case',
brand: 'Accessories',
price: 1800,
description: 'Heavy-duty protective case for iPhone with military-grade protection.',
image: 'https://i.pinimg.com/1200x/74/33/d5/7433d5eca5caa94d24a1f9d00116cf88.jpg',
features: ['Military-grade protection', 'Shock absorbing', 'Built-in screen protector', 'Port covers', 'Maximum protection'],
inStock: true
},
{
id: 'samsung-rugged-case',
name: 'Samsung Rugged Case',
brand: 'Accessories',
price: 1700,
description: 'Ultra-protective case for Samsung phones with multi-layer defense.',
image: 'https://i.pinimg.com/736x/39/1e/3e/391e3e5cae13aa767733ecfb9dd12eb3.jpg',
features: ['Multi-layer protection', 'Shockproof', 'Dust proof', 'Scratch resistant', 'Model specific'],
inStock: true
},
{
id: 'phone-ring-stand',
name: 'Phone Ring Stand',
brand: 'Accessories',
price: 400,
description: 'Multi-functional phone grip that works as a stand and finger loop.',
image: 'https://i.pinimg.com/1200x/d2/d3/dc/d2d3dc023351919ce38f3e3090aa5bb8.jpg',
features: ['360° rotation', 'Adjustable stand', 'Secure grip', 'Adhesive base', 'Multiple colors'],
inStock: true
},
{
id: 'phone-pop-socket',
name: 'Phone Pop Socket',
brand: 'Accessories',
price: 350,
description: 'Collapsible grip and stand for your phone with customizable designs.',
image: 'https://i.pinimg.com/1200x/e4/21/fa/e421fa4b8de0cd423c3f909cec63770e.jpg',
features: ['Collapsible design', 'Secure grip', 'Stand function', 'Removable adhesive', 'Various designs'],
inStock: true
},
{
id: 'phone-lanyard',
name: 'Phone Lanyard',
brand: 'Accessories',
price: 300,
description: 'Secure lanyard for your phone to keep it safe and accessible.',
image: 'https://i.pinimg.com/1200x/80/f3/b1/80f3b18cf11b01ef4bd70a9a222b118d.jpg',
features: ['Adjustable length', 'Secure attachment', 'Comfortable strap', 'Multiple colors', 'Hands-free use'],
inStock: true
},
{
id: 'screen-protector-application-kit',
name: 'Screen Protector Application Kit',
brand: 'Accessories',
price: 200,
description: 'Complete kit for perfect screen protector installation without bubbles.',
image: 'https://i.pinimg.com/1200x/19/e4/be/19e4bebe09a9dc82f7b1258d822ec318.jpg',
features: ['Alignment frame', 'Cleaning wipes', 'Dust stickers', 'Squeegee', 'Easy installation guide'],
inStock: true
},
{
id: 'camera-lens-protector',
name: 'Camera Lens Protector',
brand: 'Accessories',
price: 600,
description: 'Tempered glass protectors specifically designed for phone camera lenses.',
image: 'https://i.pinimg.com/1200x/9d/a0/d6/9da0d6714505028b02328c203bf44845.jpg',
features: ['9H hardness', 'High transparency', 'Easy installation', 'Scratch protection', 'Model specific'],
inStock: true
},
{
id: 'phone-skin-sticker',
name: 'Phone Skin Sticker',
brand: 'Accessories',
price: 450,
description: 'Vinyl skin sticker for customizing your phone appearance without bulk.',
image: 'https://i.pinimg.com/1200x/a9/00/f9/a900f96b884b66a850937639ecf234e1.jpg',
features: ['Vinyl material', 'Easy application', 'Removable', 'Various designs', 'No residue'],
inStock: true
},
{
id: 'phone-armband',
name: 'Phone Armband',
brand: 'Accessories',
price: 850,
description: 'Adjustable armband for phones during workouts and activities.',
image: 'https://i.pinimg.com/1200x/b4/89/04/b489049679a080f752c5753c87b14fb8.jpg',
features: ['Adjustable strap', 'Sweat resistant', 'Touchscreen compatible', 'Reflective details', 'Multiple sizes'],
inStock: true
}
];

export const getBrandProducts = (brand: 'Apple' | 'Samsung' | 'Laptops' | 'Accessories') => {
  return products.filter(product => product.brand === brand);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};