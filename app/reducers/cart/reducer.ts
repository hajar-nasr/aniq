"use client";

import { useReducer } from "react";

import {
  addToCart,
  CartActionTypes,
  CartState,
  CartAction,
  removeFromCart,
  clearCart,
  updateCardItem,
} from "./actions";

import getCartInitialState from "./initial-state";

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case CartActionTypes.UPDATE_CART_ITEM:
      return updateCardItem(state, action);
    case CartActionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case CartActionTypes.CLEAR_CART:
      return clearCart();
    default:
      return state;
  }
};

const useCartReducer = () => {
  return useReducer(cartReducer, null, getCartInitialState);
};

export default useCartReducer;
