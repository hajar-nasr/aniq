import { useReducer } from "react";
import { PRODUCT_ACTIONS_NAMES } from "./actions";
import { Product } from "@/app/lib/types";
import { getInitialState } from "./initial-state";

interface State {
  products: Product[];
  allProductsColors: string[];
}

interface Action {
  type: keyof typeof PRODUCT_ACTIONS_NAMES;
}

const productReducer = (state: State, action: Action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS_NAMES.ADD_TO_CART:
      // TO DO: handle adding element to cart
      return state;
    default:
      return state;
  }
};

const useProductReducer = () => {
  return useReducer(productReducer, null, getInitialState);
};

export default useProductReducer;
