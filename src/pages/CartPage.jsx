import { Link } from 'react-router-dom'
import { mockProducts, formatPrice } from '../lib/mockData'
import { Trash2, Plus, Minus } from 'lucide-react'

export function CartPage() {
  const cartItems = mockProducts.slice(0, 2)
  const totalOriginalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
  const totalDiscount = totalOriginalPrice - totalPrice

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden">
          {cartItems.map((item, index) => (
            <div key={item.id} className={`p-6 flex flex-col sm:flex-row gap-6 ${index !== 0 ? 'border-t border-slate-200' : ''}`}>
              <div className="w-full sm:w-32 aspect-square bg-slate-50 p-4 rounded-lg flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <Link to={`/products/${item.id}`} className="font-semibold text-lg text-slate-900 hover:text-primary transition-colors mb-1 line-clamp-1">
                  {item.name}
                </Link>
                <div className="text-sm text-slate-500 mb-4">{item.category}</div>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-bold text-xl text-slate-900">{formatPrice(item.price)}</span>
                  {item.discount > 0 && (
                    <>
                      <span className="text-sm text-slate-400 line-through">{formatPrice(item.originalPrice)}</span>
                      <span className="text-sm font-bold text-green-600">{item.discount}% off</span>
                    </>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-lg p-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-slate-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-slate-900 min-w-[20px] text-center">1</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-slate-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium">
                    <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">REMOVE</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-colors">
              PLACE ORDER
            </button>
          </div>
        </div>

        {/* Price Details */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-white rounded-xl border border-slate-200 sticky top-24">
            <h2 className="font-bold text-slate-500 uppercase tracking-widest text-sm p-6 border-b border-slate-200">
              Price Details
            </h2>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Price ({cartItems.length} items)</span>
                <span>{formatPrice(totalOriginalPrice)}</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount</span>
                <span>− {formatPrice(totalDiscount)}</span>
              </div>
              <div className="flex justify-between text-slate-700 font-medium">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <div className="pt-4 border-t border-slate-200 border-dashed">
                <div className="flex justify-between text-lg font-bold text-slate-900">
                  <span>Total Amount</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 text-green-700 font-medium text-sm text-center border-t border-green-100 rounded-b-xl">
              You will save {formatPrice(totalDiscount)} on this order
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}
