"use client";

import { useReducer } from "react";
import { Product } from "@/app/lib/types";
import { getInitialState } from "./initial-state";

interface State {
  products: Product[];
  allProductsColors: string[];
}

interface Action {
  type: string;
}

const productReducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const useProductReducer = () => {
  return useReducer(productReducer, null, getInitialState);
};

export default useProductReducer;
