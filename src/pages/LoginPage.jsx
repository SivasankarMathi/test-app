import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ShieldCheck, Sparkles, Truck, ArrowRight, Eye, EyeOff, CheckCircle2, Lock, Mail, Phone, User as UserIcon } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [authMethod, setAuthMethod] = useState('password') // 'password' | 'otp'
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  const { login, signup } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const returnTo = location.state?.from?.pathname || '/'

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1)
    }
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // auto focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleSendOtp = (e) => {
    e.preventDefault()
    if (!identifier.trim()) {
      setError('Please enter a valid Email or Mobile Number')
      return
    }
    setError('')
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setOtpSent(true)
    }, 600)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!isSignUp) {
      // Login validation
      if (!identifier.trim()) {
        setError('Please enter your Email or Mobile Number')
        return
      }

      if (authMethod === 'password') {
        if (!password) {
          setError('Please enter your password')
          return
        }
        if (password.length < 6) {
          setError('Password should be at least 6 characters long')
          return
        }
      } else {
        // OTP login
        const enteredOtp = otp.join('')
        if (enteredOtp.length < 4) {
          setError('Please enter the 4-digit OTP sent to your phone/email')
          return
        }
      }

      setIsLoading(true)
      setTimeout(() => {
        login(identifier, password)
        setIsLoading(false)
        setLoginSuccess(true)
        setTimeout(() => {
          navigate(returnTo)
        }, 800)
      }, 700)
    } else {
      // Sign Up validation
      if (!fullName.trim()) {
        setError('Please enter your full name')
        return
      }
      if (!identifier.trim()) {
        setError('Please enter your email or mobile number')
        return
      }
      if (!password || password.length < 6) {
        setError('Password must be at least 6 characters')
        return
      }

      setIsLoading(true)
      setTimeout(() => {
        signup({
          name: fullName,
          email: identifier.includes('@') ? identifier : '',
          phone: !identifier.includes('@') ? identifier : '',
          password
        })
        setIsLoading(false)
        setLoginSuccess(true)
        setTimeout(() => {
          navigate(returnTo)
        }, 800)
      }, 700)
    }
  }

  const fillDemoAccount = () => {
    setIsSignUp(false)
    setAuthMethod('password')
    setIdentifier('alex.turner@example.com')
    setPassword('Demo@1234')
    setError('')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200 dark:border-slate-800">
        
        {/* Left Side: Brand & Benefits Banner (Flipkart Style) */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-blue-100 mb-4">
              ExplorePlus Member Club
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">
              {isSignUp ? 'Looks like you\'re new here!' : 'Welcome Back'}
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              {isSignUp
                ? 'Sign up with your mobile number or email to get access to exclusive member perks and instant checkout.'
                : 'Get access to your Orders, Wishlist, Recommendations, and exclusive offers.'}
            </p>

            <div className="space-y-4 text-xs font-medium text-blue-100/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-yellow-300" />
                </div>
                <span>Free & fast delivery on millions of items</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-orange-300" />
                </div>
                <span>Earn SuperCoins on every purchase</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <span>100% Authentic products & secure checkout</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 relative z-10 flex items-center justify-between text-xs text-blue-200">
            <span>ExplorePlus Marketplace</span>
            <span>256-bit SSL</span>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-blue-500/30 blur-2xl pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full bg-indigo-500/30 blur-xl pointer-events-none" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white dark:bg-slate-900">
          <div className="max-w-md mx-auto w-full">
            
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {isSignUp ? 'Create an Account' : 'Log in to ExplorePlus'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {isSignUp
                    ? 'Enter your details below to create your account'
                    : 'Enter your credentials to continue shopping'}
                </p>
              </div>

              {/* Demo Fill Button */}
              {!isSignUp && (
                <button
                  type="button"
                  onClick={fillDemoAccount}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors"
                >
                  ⚡ Demo user
                </button>
              )}
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mb-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 text-xs font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {error}
              </div>
            )}

            {/* Success Banner */}
            {loginSuccess && (
              <div className="mb-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 text-xs font-medium flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{isSignUp ? 'Account created successfully! Redirecting...' : 'Successfully signed in! Redirecting...'}</span>
              </div>
            )}

            {/* Mode switch pills for login (Password vs OTP) */}
            {!isSignUp && (
              <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => { setAuthMethod('password'); setOtpSent(false); setError(''); }}
                  className={`py-2 rounded-lg transition-all ${
                    authMethod === 'password'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Password Login
                </button>
                <button
                  type="button"
                  onClick={() => { setAuthMethod('otp'); setError(''); }}
                  className={`py-2 rounded-lg transition-all ${
                    authMethod === 'otp'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Request OTP
                </button>
              </div>
            )}

            <form onSubmit={authMethod === 'otp' && !otpSent ? handleSendOtp : handleSubmit} className="space-y-4">
              
              {/* Full Name for Signup */}
              {isSignUp && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Alex Turner"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                      required
                    />
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              )}

              {/* Email or Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address or Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="name@example.com or 10-digit mobile"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                    required
                  />
                  {identifier.includes('@') ? (
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  ) : (
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  )}
                </div>
              </div>

              {/* Password mode or Sign Up */}
              {(isSignUp || authMethod === 'password') && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    {!isSignUp && (
                      <button
                        type="button"
                        onClick={() => alert('Password reset link has been dispatched to your email/phone.')}
                        className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="At least 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-11 pl-10 pr-11 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                      required
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* OTP Input for OTP mode */}
              {!isSignUp && authMethod === 'otp' && otpSent && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Enter 4-Digit OTP
                    </label>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Resend OTP
                    </button>
                  </div>
                  <div className="flex justify-between gap-3">
                    {[0, 1, 2, 3].map((idx) => (
                      <input
                        key={idx}
                        id={`otp-input-${idx}`}
                        type="text"
                        maxLength={1}
                        value={otp[idx]}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        className="w-14 h-12 text-center text-lg font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Tip: Enter any 4 numbers (e.g. 1 2 3 4) to verify.
                  </p>
                </div>
              )}

              {/* Terms disclaimer */}
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                By continuing, you agree to ExplorePlus's{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Use</a> and{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading || loginSuccess}
                className="w-full h-11 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold rounded-xl shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 text-sm mt-3"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>
                      {isSignUp
                        ? 'Continue & Create Account'
                        : authMethod === 'otp' && !otpSent
                        ? 'Request One-Time Password'
                        : 'Sign In'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Toggle Login / Signup */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
              {isSignUp ? (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsSignUp(false); setError(''); }}
                    className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Log in
                  </button>
                </p>
              ) : (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  New to ExplorePlus?{' '}
                  <button
                    type="button"
                    onClick={() => { setIsSignUp(true); setError(''); }}
                    className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Create an account
                  </button>
                </p>
              )}
            </div>

            {/* Return to home link */}
            <div className="mt-4 text-center">
              <Link to="/" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
