"use client";

type CartItem = {
  id: number;
  name: string;
  size: string;
};

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (
    item: CartItem
  ) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}