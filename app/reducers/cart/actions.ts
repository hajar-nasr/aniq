import { CartItem } from "@/app/lib/types";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

export type CartState = {
  items: CartItem[];
  totalPrice: number;
};

export type CartAction =
  | {
      type: CartActionTypes.ADD_TO_CART;
      cartItem: CartItem;
    }
  | {
      type: CartActionTypes.UPDATE_CART_ITEM;
      productId: string;
      updatedFields: CartItem;
    }
  | {
      type: CartActionTypes.REMOVE_FROM_CART;
      productId: string;
    }
  | {
      type: CartActionTypes.CLEAR_CART;
    };

// add a new item to the state
export const addToCart = (
  state: CartState,
  action: Extract<CartAction, { type: CartActionTypes.ADD_TO_CART }>,
) => {
  const { cartItem } = action;

  const alreadyExist = state.items?.find(
    (item) => item.product_id === cartItem.product_id,
  );

  // don't add the item if it already exists
  if (alreadyExist) return state;

  return {
    ...state,
    items: [cartItem, ...(state.items || [])],
    totalPrice: state.totalPrice + cartItem.price * cartItem.quantity,
  };
};

export const updateCardItem = (
  state: CartState,
  action: Extract<CartAction, { type: CartActionTypes.UPDATE_CART_ITEM }>,
) => {
  const newItems = state.items.map((item) => {
    if (item.product_id !== action.productId) return item;

    return {
      ...item,
      ...action.updatedFields,
    };
  });

  const totalPrice = newItems.reduce(
    (acc, cur) => cur.price * cur.quantity + acc,
    0,
  );

  return {
    ...state,
    items: newItems,
    totalPrice,
  };
};

export const removeFromCart = (
  state: CartState,
  action: Extract<CartAction, { type: CartActionTypes.REMOVE_FROM_CART }>,
) => {
  const { productId } = action;

  const item = state.items.find((p) => p.product_id === productId);

  return {
    ...state,
    items: state.items.filter((item) => item.product_id !== productId),
    ...(item && {
      totalPrice: state.totalPrice - item.price * item.quantity,
    }),
  };
};

export const clearCart = () => {
  return {
    items: [],
    totalPrice: 0,
  };
};
