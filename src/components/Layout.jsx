import { Search, User, Package, Heart, LogOut, Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export function Layout({ children }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="bg-primary/95 backdrop-blur sticky top-0 z-50 shadow-md border-b border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center gap-6">
          
          <Link to="/" className="flex flex-col items-start gap-0.5 flex-shrink-0">
            <span className="text-xl font-black italic tracking-tighter text-white leading-none">
              Explore<span className="text-orange-400">Plus</span>
            </span>
            <span className="text-[10px] text-primary-foreground/80 italic font-medium leading-none flex items-center gap-1">
              Storefront Concept
            </span>
          </Link>

          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder="Search for products, brands and more" 
                className="w-full h-10 pl-11 pr-4 rounded-xl text-sm bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:bg-white focus:text-slate-900 focus:placeholder:text-slate-400 focus:border-white transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-white/60 absolute left-3.5 top-2.5 group-focus-within:text-slate-400 transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-4 ml-auto h-full">
            <div className="relative h-full flex items-center"
                 onMouseEnter={() => setIsProfileOpen(true)}
                 onMouseLeave={() => setIsProfileOpen(false)}>
              
              <button className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg text-white font-medium text-sm transition-colors">
                <User className="w-5 h-5" /> 
                <span className="hidden lg:block">Login</span>
              </button>

              {/* Dropdown */}
              {isProfileOpen && (
                <div className="absolute top-full right-0 w-64 pt-2">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">New customer?</span>
                      <Link to="/" className="text-xs font-bold text-primary hover:underline">Sign Up</Link>
                    </div>
                    <div className="p-2 space-y-1">
                      <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                        <User className="w-4 h-4" /> My Profile
                      </Link>
                      <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Package className="w-4 h-4" /> Orders
                      </Link>
                      <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                        <Heart className="w-4 h-4" /> Wishlist
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 ml-1 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">About</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">Help</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/" className="hover:text-white transition-colors">Payments</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Shipping</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">Consumer Policy</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/" className="hover:text-white transition-colors">Return Policy</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-2 lg:border-l border-slate-800 lg:pl-8">
              <h4 className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">Registered Office</h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                ExplorePlus Internet Private Limited, <br/>
                Tech Park, Outer Ring Road, <br/>
                Bengaluru, 560103, <br/>
                Karnataka, India
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-6">
              <span>© 2024 ExplorePlus Clone</span>
              <span>Built with React + Vite</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> 100% Secure Payments
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Shield(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
