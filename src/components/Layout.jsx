import { ShoppingCart, Menu, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="text-xl font-bold text-primary tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-lg italic">
                f
              </div>
              <span className="hidden sm:inline-block">Flipkart Clone</span>
            </Link>
          </div>

          <div className="flex-1 max-w-2xl mx-auto hidden md:flex items-center relative">
            <Search className="absolute left-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full bg-slate-100 text-slate-900 text-sm rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md hover:bg-slate-50 transition-colors hidden sm:block"
            >
              Login
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] grid place-items-center rounded-full font-bold">
                  2
                </span>
              </div>
              <span className="hidden sm:inline-block">Cart</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-slate-50">
        {children}
      </main>

      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Flipkart Clone. For demonstration purposes only.</p>
        </div>
      </footer>
    </div>
  )
}
