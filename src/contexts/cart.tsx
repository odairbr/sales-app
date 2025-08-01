'use client'
import { createContext, useContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    const presentItem = cart.find((i) => i.id === item.id)

    if (presentItem) {
      const items = cart.map((i) =>
        i.id === item.id ?
          { ...i, quantity: i.quantity + 1 } :
          i
      )
      return setCart(items)
    } else {
      return setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);

  // Error handling if useCart is used outside CartProvider
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};