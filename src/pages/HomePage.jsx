import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { mockProducts, formatPrice } from '../lib/mockData'

const categories = [
  { name: 'Mobiles', icon: '📱' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Electronics', icon: '💻' },
  { name: 'Home', icon: '🏠' },
  { name: 'Appliances', icon: '📺' },
  { name: 'Toys', icon: '🧸' },
]

export function HomePage() {
  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Categories Bar */}
      <section className="bg-white mx-4 rounded-md shadow-sm border border-slate-100 p-4">
        <div className="container mx-auto flex items-center justify-between overflow-x-auto gap-6 hide-scrollbar">
          {categories.map((category) => (
            <Link key={category.name} to={`/products?category=${category.name}`} className="flex flex-col items-center gap-2 group min-w-[64px]">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center text-2xl group-hover:bg-primary/5 transition-colors">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl h-[200px] md:h-[320px] flex items-center px-8 md:px-16 text-white relative overflow-hidden shadow-lg shadow-blue-900/10">
          <div className="relative z-10 max-w-lg">
            <p className="text-blue-200 font-medium tracking-wide mb-2">END OF SEASON SALE</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Up to 60% Off<br/>on Electronics</h1>
            <Link to="/products" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-md hover:bg-slate-50 transition-colors">
              Shop Now
            </Link>
          </div>
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white/10 skew-x-12 translate-x-16 rounded-3xl" />
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">Trending Right Now</h2>
          <Link to="/products" className="text-sm font-semibold text-primary hover:underline">View All</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col">
              <div className="aspect-square bg-slate-50 p-6 relative">
                {product.badges.length > 0 && (
                  <div className="absolute top-3 left-3 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {product.badges[0]}
                  </div>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="text-xs font-medium text-slate-500 mb-1">{product.category}</div>
                <h3 className="font-medium text-slate-900 text-sm md:text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded textxs font-bold gap-0.5 text-[11px]">
                    {product.rating} <Star className="w-3 h-3 fill-white" />
                  </div>
                  <span className="text-xs text-slate-500">({product.reviews.toLocaleString()})</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-lg md:text-xl text-slate-900">{formatPrice(product.price)}</span>
                    {product.discount > 0 && (
                      <>
                        <span className="text-sm text-slate-500 line-through">{formatPrice(product.originalPrice)}</span>
                        <span className="text-xs font-bold text-green-600">{product.discount}% off</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
