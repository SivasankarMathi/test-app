import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'flimart_cart';

const initialState = {
  items: [],
  coupon: null,
  couponDiscount: 0
};

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  } catch {
    return initialState;
  }
}

function saveCart(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      items: state.items,
      coupon: state.coupon,
      couponDiscount: state.couponDiscount
    }));
  } catch (e) {
    console.warn('Failed to save cart:', e);
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.payload.quantity
        };
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }
    
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== action.payload.productId)
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    }
    
    case 'APPLY_COUPON': {
      return {
        ...state,
        coupon: action.payload.code,
        couponDiscount: action.payload.discount
      };
    }
    
    case 'REMOVE_COUPON': {
      return {
        ...state,
        coupon: null,
        couponDiscount: 0
      };
    }
    
    case 'CLEAR_CART': {
      return { ...initialState };
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCart);
  
  useEffect(() => {
    saveCart(state);
  }, [state]);
  
  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  };
  
  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };
  
  const applyCoupon = (code, discount) => {
    dispatch({ type: 'APPLY_COUPON', payload: { code, discount } });
  };
  
  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const getItemCount = () => {
    return state.items.reduce((sum, item) => sum + item.quantity, 0);
  };
  
  const getCartTotal = () => {
    return state.items.reduce(
      (sum, item) => sum + (item.product.price * item.quantity), 0
    );
  };
  
  const getMrpTotal = () => {
    return state.items.reduce(
      (sum, item) => sum + (item.product.mrp * item.quantity), 0
    );
  };
  
  const getDiscountTotal = () => {
    return getMrpTotal() - getCartTotal();
  };
  
  const getDeliveryCharge = () => {
    return getCartTotal() >= 499 ? 0 : 49;
  };
  
  const getFinalTotal = () => {
    return getCartTotal() + getDeliveryCharge() - state.couponDiscount;
  };
  
  return (
    <CartContext.Provider value={{
      items: state.items,
      coupon: state.coupon,
      couponDiscount: state.couponDiscount,
      addItem,
      removeItem,
      updateQuantity,
      applyCoupon,
      removeCoupon,
      clearCart,
      getItemCount,
      getCartTotal,
      getMrpTotal,
      getDiscountTotal,
      getDeliveryCharge,
      getFinalTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}