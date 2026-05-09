export const mockProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max (Natural Titanium, 256GB)',
    description: 'The ultimate iPhone featured with cutting edge capabilities...',
    price: 159900,
    originalPrice: 159900,
    discount: 0,
    rating: 4.8,
    reviews: 12450,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800&q=80',
    category: 'Mobiles',
    inStock: true,
    badges: ['Bestseller']
  },
  {
    id: '2',
    name: 'Sony PS5 Console',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD.',
    price: 49990,
    originalPrice: 54990,
    discount: 9,
    rating: 4.9,
    reviews: 8320,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    badges: ['Top Rated']
  },
  {
    id: '3',
    name: 'Nike Air Max 270',
    description: 'Men\'s lifestyle shoes with the biggest heel Air unit yet.',
    price: 12995,
    originalPrice: 14995,
    discount: 13,
    rating: 4.5,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Fashion',
    inStock: true,
    badges: []
  },
  {
    id: '4',
    name: 'MacBook Air M2',
    description: '13.6-inch Liquid Retina display, 8GB RAM, 256GB SSD storage.',
    price: 114900,
    originalPrice: 119900,
    discount: 4,
    rating: 4.7,
    reviews: 5800,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    category: 'Laptops',
    inStock: true,
    badges: ['Bank Offer']
  }
]

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}
