import { Link } from 'react-router-dom'
import { Filter, Star } from 'lucide-react'
import { mockProducts, formatPrice } from '../lib/mockData'

export function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-4 pb-4 border-b">
              <h3 className="font-bold flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</h3>
              <button className="text-xs text-primary font-medium uppercase">Clear All</button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-slate-900 mb-3 uppercase tracking-wide">Category</h4>
                <div className="space-y-2">
                  {['Mobiles', 'Laptops', 'Electronics', 'Fashion'].map((cat) => (
                    <label key={cat} className="flex flex-row items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" className="rounded text-primary border-slate-300 focus:ring-primary" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium text-sm text-slate-900 mb-3 uppercase tracking-wide">Customer Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex flex-row items-center gap-2 text-sm text-slate-600">
                      <input type="checkbox" className="rounded text-primary border-slate-300 focus:ring-primary" />
                      {rating}★ & above
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="font-bold text-xl text-slate-900">Showing all products</h1>
              <p className="text-sm text-slate-500">(Showing {mockProducts.length} results)</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-slate-700">Sort by:</span>
              <select className="border-0 bg-slate-50 rounded-md font-medium text-slate-900 py-1.5 focus:ring-0 cursor-pointer">
                <option>Relevance</option>
                <option>Price -- Low to High</option>
                <option>Price -- High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col">
                <div className="aspect-square bg-slate-50 p-8 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-slate-900 text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs font-bold gap-0.5">
                      {product.rating} <Star className="w-3 h-3 fill-white" />
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews.toLocaleString()})</span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-xl text-slate-900">{formatPrice(product.price)}</span>
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
        </div>

      </div>
    </div>
  )
}
