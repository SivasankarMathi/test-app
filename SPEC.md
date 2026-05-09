# FlipKart Clone - E-Commerce App Specification

## Concept & Vision

A modern, responsive e-commerce platform inspired by Flipkart's functionality with a refined aesthetic. The app delivers a smooth, engaging shopping experience with intuitive navigation, realistic product data, and satisfying micro-interactions. It feels like a premium marketplace where discovery is delightful and checkout is effortless.

## Design Language

### Aesthetic Direction
Clean, trustworthy e-commerce aesthetic with a warm color palette. Inspired by modern Indian fintech apps — confident use of color, clear hierarchy, and a sense of energetic commerce without being overwhelming.

### Color Palette
- **Primary**: `#2874F0` (Flipkart Blue - trust, reliability)
- **Secondary**: `#FB521B` (Flipkart Orange - deals, urgency)
- **Accent**: `#FFE199` (Warm Yellow - highlights)
- **Background**: `#F1F3F6` (Light gray - easy on eyes)
- **Surface**: `#FFFFFF` (White cards)
- **Text Primary**: `#212121` (Near black)
- **Text Secondary**: `#878787` (Gray)
- **Success**: `#26A64B` (Green - confirmations)
- **Error**: `#FF3F5C` (Red-pink - errors)

### Typography
- **Headings**: `Poppins` (Bold, modern, friendly)
- **Body**: `Inter` (Clean, readable at all sizes)
- **Prices/Numbers**: `Inter` with tabular-nums

### Spatial System
- Base unit: 8px
- Card padding: 16px
- Section spacing: 32-48px
- Border radius: 8px (cards), 4px (buttons), 50% (avatars)

### Motion Philosophy
- **Page transitions**: Fade + slide (200ms ease-out)
- **Card hovers**: Scale 1.02 + shadow lift (150ms spring)
- **Add to cart**: Satisfying bounce + checkmark morph
- **Cart updates**: Number badge pop animation
- **Scroll reveals**: Staggered fade-up for product grids

### Visual Assets
- **Icons**: Lucide React (consistent stroke width)
- **Product Images**: Unsplash for realistic product photography
- **Decorative**: Subtle gradient overlays, category color coding

## Layout & Structure

### Navigation Architecture
1. **Top Bar** (sticky)
   - Logo with brand mark
   - Search bar (expandable on focus)
   - User actions: Account, Kart (cart with badge)

2. **Home Page**
   - Hero banner carousel with auto-play
   - Category quick-links (horizontal scroll)
   - Deal of the Day countdown
   - Product grids by category
   - Flash deals section

3. **Product Listing Page**
   - Filter sidebar (collapsible on mobile)
   - Sort dropdown
   - Product grid with lazy loading
   - Quick add to cart overlay

4. **Product Detail Page**
   - Large image gallery with zoom
   - Product info + variant selection
   - Add to cart with quantity
   - Similar products carousel

5. **Cart (Kart) Page**
   - Cart items with quantity controls
   - Price breakdown summary
   - Coupon input
   - Promo highlights
   - Place order CTA

6. **Footer**
   - Links, contact info, social

### Responsive Strategy
- Desktop: 4-column product grid
- Tablet: 3-column grid
- Mobile: 2-column grid, bottom nav

## Features & Interactions

### Core Features

**Home Page**
- Hero carousel: auto-advances every 5s, manual dots, swipe on mobile
- Category chips: horizontal scroll with snap points
- "Deal of the Day": countdown timer, refreshes every 24h
- Flash deals: limited stock badges, "Selling fast" indicators
- "Recently Viewed" carousel (persisted in localStorage)

**Product Listing**
- Filter by: Category, Price range, Rating, Availability
- Sort by: Relevance, Price (low-high, high-low), Newest, Popularity
- Infinite scroll with skeleton loading
- Quick view modal on hover (desktop)
- Add to cart from listing

**Product Detail**
- Image gallery with thumbnails, zoom on hover
- Size/variant selector (size chips)
- Quantity picker (1-10)
- Add to Cart with animation feedback
- Add to Wishlist (heart toggle)
- Similar products horizontal scroll
- Product specs accordion

**Cart Page**
- Line items with image, title, price, quantity
- Quantity +/- buttons with immediate price update
- Remove item with confirmation
- Price breakdown: MRP, Discount, Delivery, Total
- Coupon code field with validation feedback
- "Place Order" button (disabled if cart empty)

### Interaction Details
- **Add to Cart**: Button morphs to checkmark, badge pops
- **Quantity change**: Price animates (counter effect)
- **Hover states**: Cards lift, buttons color shift
- **Empty states**: Illustrated graphics, clear CTAs
- **Loading states**: Skeleton screens matching content shape
- **Error states**: Toast notifications, inline retry options

### Edge Cases
- Cart item out of stock: Gray out with "Remove" option
- Price change: Alert banner, recalculate
- Session expiry: Graceful redirect to login
- Offline: Cached view with offline indicator

## Component Inventory

### NavBar
- States: Default, Scrolled (shadow), Search focused
- Mobile: Hamburger menu, condensed

### SearchBar
- States: Default, Focused (expanded), Loading, Results, No results
- Autocomplete dropdown with recent searches

### ProductCard
- States: Default, Hover (lifted), Loading (skeleton), Out of stock (dimmed)
- Variants: Small (list view), Large (featured)

### CategoryChip
- States: Default, Selected, Hover

### Button
- Variants: Primary (filled), Secondary (outline), Ghost
- States: Default, Hover, Active, Loading, Disabled

### CartItem
- States: Default, Updating, Out of stock
- Quantity: Compact stepper

### PriceDisplay
- Shows MRP (strikethrough), Discount %, Final price
- Animates on change

### Badge
- Variants: Dot, Count, Status
- Pop animation on increment

### Modal
- Overlay with backdrop blur
- Slide-up on mobile, fade-scale on desktop

### Toast
- Variants: Success, Error, Info
- Auto-dismiss after 3s

## Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **State**: React Context + useReducer (cart state)
- **Styling**: CSS Modules (scoped, maintainable)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

### Architecture
```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level components
├── context/        # Cart, Auth contexts
├── hooks/          # Custom hooks
├── data/           # Mock product data
├── styles/         # Global styles, variables
└── utils/          # Helpers
```

### Data Model
- **Product**: id, name, category, price, mrp, rating, reviews, images, variants, stock
- **CartItem**: productId, quantity, variant
- **User**: (mock for now)

### State Management
- **CartContext**: items[], addItem, removeItem, updateQuantity, clearCart
- **Persisted**: Cart survives refresh (localStorage)

### Performance
- Lazy load images with Intersection Observer
- Debounced search
- Memoized product cards