import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingCart, Zap, Shield, ArrowLeft } from 'lucide-react'
import { mockProducts, formatPrice } from '../lib/mockData'

export function ProductDetailPage() {
  const { id } = useParams()
  const product = mockProducts.find(p => p.id === id) || mockProducts[0] // fallback for demo

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to shopping
      </Link>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Images */}
        <div className="w-full md:w-2/5 lg:w-1/2 p-8 md:p-12 bg-slate-50 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-200">
          <img src={product.image} alt={product.name} className="w-full max-w-md object-contain aspect-square mix-blend-multiply" />
          
          <div className="flex gap-4 w-full justify-center mt-8">
            <button className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-colors">
              <ShoppingCart className="w-5 h-5" /> ADD TO CART
            </button>
            <button className="flex-1 max-w-[200px] flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-colors">
              <Zap className="w-5 h-5" /> BUY NOW
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-3/5 lg:w-1/2 p-8 md:p-12">
          <div className="mb-2 text-sm font-medium text-slate-500">{product.category}</div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-bold gap-1">
              {product.rating} <Star className="w-4 h-4 fill-white" />
            </div>
            <span className="text-sm text-slate-500 font-medium">{product.reviews.toLocaleString()} Ratings & Reviews</span>
          </div>

          <div className="flex flex-col gap-1 mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-black text-slate-900 tracking-tight">{formatPrice(product.price)}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-xl text-slate-400 line-through font-medium">{formatPrice(product.originalPrice)}</span>
                  <span className="text-lg font-bold text-green-600">{product.discount}% off</span>
                </>
              )}
            </div>
            <p className="text-sm text-slate-500 font-medium">+ ₹49 Secured Packaging Fee</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Product Description</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {product.description}
                <br /><br />
                Experience superior quality and performance. This item has been carefully crafted with premium materials to ensure durability and reliability for everyday use.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 mt-8 text-sm">
              <div className="flex items-center gap-3 text-slate-700">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold">1 Year Manufacturer Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-5 h-5 flex items-center justify-center rounded-full border border-slate-400">₹</div>
                <span>Cash on Delivery available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
