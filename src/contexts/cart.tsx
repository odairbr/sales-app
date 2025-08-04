'use client'
import { CartItem } from "@/shared/interfaces/item.interface";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  totalAmount: string;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalAmount, setTotalAmount] = useState('')

  const sumTotalItems = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }
  const sumTotalAmount = (items: CartItem[]) => {
    return items.reduce((total, item) => total + (item.quantity * item.price), 0)
  }
  const financial = (x: number) => {
    return x.toFixed(2);
  }

  const addToCart = (item: CartItem) => {
    const presentItem = cart.find((i) => i.id === item.id)

    if (presentItem) {
      const items = cart.map((i) =>
        i.id === item.id ?
          { ...i, quantity: i.quantity + 1 } :
          i
      )
      setCart(items)
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id: string) => {
    const newCart = cart.map((i) => i.id === id ?
      { ...i, quantity: i.quantity - 1 } :
      i
    )
    setCart(newCart.filter((i) => i.quantity > 0))
  }

  useEffect(() => {
    setTotalItems(sumTotalItems(cart))
    setTotalAmount(financial(sumTotalAmount(cart)))
  }, [totalItems, cart])


  return (
    <CartContext.Provider
      value={{ cart, totalItems, totalAmount, addToCart, removeFromCart }}
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