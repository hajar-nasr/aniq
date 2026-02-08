"use client";

import { createContext, useEffect } from "react";
import { CartAction, CartState } from "./actions";
import useCartReducer from "./reducer";

type CartContextProps = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useCartReducer();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
