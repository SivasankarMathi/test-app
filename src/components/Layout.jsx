import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
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
