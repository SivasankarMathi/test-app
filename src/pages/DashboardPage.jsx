import { Link } from 'react-router-dom'
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Users,
  Star,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  BarChart2,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
} from 'lucide-react'
import { mockProducts, formatPrice } from '../lib/mockData'

// ── Stat card data ────────────────────────────────────────────────────────────
const statCards = [
  {
    label: 'Total Revenue',
    value: '₹24,81,200',
    change: +18.4,
    icon: DollarSign,
    color: 'blue',
  },
  {
    label: 'Total Orders',
    value: '8,342',
    change: +12.1,
    icon: ShoppingBag,
    color: 'orange',
  },
  {
    label: 'Active Customers',
    value: '3,918',
    change: +6.3,
    icon: Users,
    color: 'green',
  },
  {
    label: 'Avg. Order Value',
    value: '₹2,974',
    change: -3.2,
    icon: BarChart2,
    color: 'purple',
  },
]

// ── Category performance data ─────────────────────────────────────────────────
const categoryStats = [
  {
    name: 'Mobiles',
    icon: '📱',
    revenue: 980400,
    orders: 312,
    growth: +22,
    color: 'blue',
  },
  {
    name: 'Laptops',
    icon: '💻',
    revenue: 764200,
    orders: 198,
    growth: +14,
    color: 'indigo',
  },
  {
    name: 'Electronics',
    icon: '🎮',
    revenue: 523800,
    orders: 445,
    growth: +8,
    color: 'purple',
  },
  {
    name: 'Fashion',
    icon: '👕',
    revenue: 214900,
    orders: 876,
    growth: -2,
    color: 'pink',
  },
  {
    name: 'Appliances',
    icon: '📺',
    revenue: 390100,
    orders: 267,
    growth: +5,
    color: 'teal',
  },
  {
    name: 'Toys',
    icon: '🧸',
    revenue: 97600,
    orders: 534,
    growth: +31,
    color: 'amber',
  },
]

// ── Recent orders ─────────────────────────────────────────────────────────────
const recentOrders = [
  {
    id: '#ORD-10482',
    customer: 'Arjun Sharma',
    product: 'iPhone 15 Pro Max',
    amount: 159900,
    status: 'delivered',
    date: '2 mins ago',
  },
  {
    id: '#ORD-10481',
    customer: 'Priya Mehta',
    product: 'MacBook Air M2',
    amount: 114900,
    status: 'shipped',
    date: '18 mins ago',
  },
  {
    id: '#ORD-10480',
    customer: 'Rohan Das',
    product: 'Sony PS5 Console',
    amount: 49990,
    status: 'processing',
    date: '34 mins ago',
  },
  {
    id: '#ORD-10479',
    customer: 'Sneha Patel',
    product: 'Nike Air Max 270',
    amount: 12995,
    status: 'delivered',
    date: '1 hr ago',
  },
  {
    id: '#ORD-10478',
    customer: 'Vikram Nair',
    product: 'MacBook Air M2',
    amount: 114900,
    status: 'cancelled',
    date: '2 hrs ago',
  },
]

// ── Monthly revenue sparkline (simple bar data) ───────────────────────────────
const monthlyData = [42, 58, 51, 67, 73, 60, 88, 76, 95, 82, 110, 124]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// ── Helpers ───────────────────────────────────────────────────────────────────
const colorMap = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    icon: 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400',
    bar: 'bg-blue-500',
    badge: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    icon: 'bg-orange-100 dark:bg-orange-900/60 text-orange-600 dark:text-orange-400',
    bar: 'bg-orange-500',
    badge: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300',
  },
  green: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    icon: 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400',
    bar: 'bg-emerald-500',
    badge: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    icon: 'bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400',
    bar: 'bg-purple-500',
    badge: 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    icon: 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400',
    bar: 'bg-indigo-500',
    badge: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    icon: 'bg-pink-100 dark:bg-pink-900/60 text-pink-600 dark:text-pink-400',
    bar: 'bg-pink-500',
    badge: 'bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    icon: 'bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400',
    bar: 'bg-teal-500',
    badge: 'bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    icon: 'bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400',
    bar: 'bg-amber-500',
    badge: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
  },
}

const statusConfig = {
  delivered: {
    label: 'Delivered',
    icon: CheckCircle,
    cls: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40',
  },
  shipped: {
    label: 'Shipped',
    icon: Truck,
    cls: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40',
  },
  processing: {
    label: 'Processing',
    icon: Clock,
    cls: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircle,
    cls: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40',
  },
}

const maxBar = Math.max(...monthlyData)

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">

      {/* ── Page header ───────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Overview of your store performance
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live · Last updated just now
        </span>
      </div>

      {/* ── KPI stat cards ─────────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((card) => {
            const colors = colorMap[card.color]
            const Icon = card.icon
            const positive = card.change >= 0
            return (
              <div
                key={card.label}
                className={`${colors.bg} rounded-2xl border border-white/60 dark:border-slate-800 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className={`${colors.icon} w-10 h-10 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                      positive
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400'
                        : 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400'
                    }`}
                  >
                    {positive ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {Math.abs(card.change)}%
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums leading-none">
                    {card.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{card.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Revenue chart + Top products ──────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Revenue bar chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white text-lg">Monthly Revenue</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">FY 2024 · in ₹ Lakhs</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" /> +18.4% YoY
            </span>
          </div>
          <div className="flex items-end gap-1 md:gap-2 h-40">
            {monthlyData.map((val, i) => (
              <div key={months[i]} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600 relative"
                  style={{ height: `${(val / maxBar) * 100}%` }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    ₹{val}L
                  </span>
                </div>
                <span className="text-[9px] md:text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                  {months[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900 dark:text-white text-lg">Top Products</h2>
            <Link to="/products" className="text-xs font-semibold text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {mockProducts.map((p, idx) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="flex items-center gap-3 group"
              >
                <span className="text-xs font-bold text-slate-400 dark:text-slate-600 w-4 text-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-primary transition-colors">
                    {p.name}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex items-center bg-green-600 text-white px-1 py-0.5 rounded text-[10px] font-bold gap-0.5">
                      {p.rating} <Star className="w-2.5 h-2.5 fill-white" />
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {p.reviews.toLocaleString()} reviews
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums flex-shrink-0">
                  {formatPrice(p.price)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category performance cards ─────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-900 dark:text-white text-lg">Category Performance</h2>
          <Link to="/products" className="text-xs font-semibold text-primary hover:underline">
            Browse All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {categoryStats.map((cat) => {
            const colors = colorMap[cat.color]
            const positive = cat.growth >= 0
            return (
              <Link
                key={cat.name}
                to={`/products?category=${cat.name}`}
                className={`${colors.bg} rounded-2xl border border-white/60 dark:border-slate-800 p-4 flex flex-col gap-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{cat.icon}</span>
                  <span
                    className={`flex items-center gap-0.5 text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                      positive
                        ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400'
                        : 'bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-400'
                    }`}
                  >
                    {positive ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {Math.abs(cat.growth)}%
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{cat.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {cat.orders} orders
                  </p>
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                    {formatPrice(cat.revenue)}
                  </p>
                  {/* Mini progress bar */}
                  <div className="mt-1.5 h-1 rounded-full bg-white/60 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bar}`}
                      style={{ width: `${Math.min(100, (cat.revenue / 1000000) * 100)}%` }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Recent orders table ────────────────────────────────────── */}
      <section>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <h2 className="font-bold text-slate-900 dark:text-white text-lg">Recent Orders</h2>
            <Link to="/cart" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
              <Package className="w-3.5 h-3.5" /> View Orders
            </Link>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide border-b border-slate-100 dark:border-slate-800">
                  <th className="text-left px-6 py-3">Order ID</th>
                  <th className="text-left px-6 py-3">Customer</th>
                  <th className="text-left px-6 py-3">Product</th>
                  <th className="text-left px-6 py-3">Amount</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="text-left px-6 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {recentOrders.map((order) => {
                  const status = statusConfig[order.status]
                  const StatusIcon = status.icon
                  return (
                    <tr
                      key={order.id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="px-6 py-3.5 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {order.id}
                      </td>
                      <td className="px-6 py-3.5 font-medium text-slate-800 dark:text-slate-200">
                        {order.customer}
                      </td>
                      <td className="px-6 py-3.5 text-slate-600 dark:text-slate-300">
                        {order.product}
                      </td>
                      <td className="px-6 py-3.5 font-bold text-slate-900 dark:text-white tabular-nums">
                        {formatPrice(order.amount)}
                      </td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${status.cls}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-xs text-slate-400 dark:text-slate-500">
                        {order.date}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile list */}
          <div className="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
            {recentOrders.map((order) => {
              const status = statusConfig[order.status]
              const StatusIcon = status.icon
              return (
                <div key={order.id} className="px-4 py-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-400">{order.id}</span>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${status.cls}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">{order.customer}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-white tabular-nums text-sm">
                        {formatPrice(order.amount)}
                      </p>
                      <p className="text-[11px] text-slate-400">{order.date}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
