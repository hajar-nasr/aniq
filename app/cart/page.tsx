"use client";

import Link from "next/link";
import Image from "next/image";
import ProductQuantityButton from "../components/core/ProductQuantityButton";
import Button from "../components/core/Button";
import { CartContext } from "../reducers/cart/context";
import { useContext } from "react";
import { CartActionTypes } from "../reducers/cart/actions";
import { CartItem } from "../lib/types";

const CartPage = () => {
  const { state } = useContext(CartContext) || {};
  if (!state?.items.length)
    return (
      <main className="flex-1 flex justify-center items-center">
        <div>
          <h1 className="text-center text-xl md:text-2xl max-w-142.5 m-auto text-gray-600">
            You don&#39;t have any products on your cart.{" "}
            <Link
              href="/products/list"
              className="hover:underline text-(--tertiary-color)"
            >
              Explore all our products
            </Link>{" "}
            to add more items.
          </h1>
        </div>
      </main>
    );

  return (
    <main className="text-(--secondary-color)">
      <h1 className="text-3xl md:text-4xl lg:tex-5xl text-(--main-color)">
        Your Shopping Cart
      </h1>
      <div className="flex flex-col-reverse md:flex-row pt-2 gap-4 lg:gap-10 lg:pt-6 w-full">
        <div className="flex-3/5">
          <CartItems />
          <ClearCardButton />
        </div>

        <OrderSummary />
      </div>
    </main>
  );
};

const CartItems = () => {
  const { state, dispatch } = useContext(CartContext) || {};
  if (!state) return [];

  const removeItem = (productId: string) => {
    dispatch?.({
      type: CartActionTypes.REMOVE_FROM_CART,
      productId,
    });
  };

  const adjustQuantity = (adjustBy: number, product: CartItem) => {
    if (adjustBy < 0 && product.quantity <= 1) return;

    dispatch?.({
      type: CartActionTypes.UPDATE_CART_ITEM,
      productId: product.product_id,
      updatedFields: {
        quantity: product.quantity + adjustBy,
      } as CartItem,
    });
  };

  return (
    <div className="grid auto-rows-fr">
      {state.items.map((product) => {
        return (
          <div
            key={product.product_id}
            className="flex flex-col lg:flex-row gap-2 lg:gap-6 not-last:border-b-2 not-last:border-b-gray-200 py-4 lg:py-6"
          >
            <Link
              className="w-full h-60 lg:w-70 lg:h-80"
              href={`/products/item/${product.product_id}`}
            >
              <Image
                src={product.image_url}
                alt=""
                width={200}
                height={200}
                className="w-full h-full rounded-xl object-cover object-center"
              />
            </Link>

            <div className="flex-1">
              <h2 className="font-medium text-xl lg:text-2xl pt-2 md:pt-0">
                <Link
                  className="hover:underline hover:underline-offset-3"
                  href={`/products/item/${product.product_id}`}
                >
                  {product.name}
                </Link>
              </h2>

              <h3 className="text-sm lg:text-base font-medium py-2 lg:py-4">
                {product.color}.{product.size}
              </h3>

              <p className="text-base lg:text-lg text-gray-600">
                {product.description}
              </p>

              <div className="flex flex-col-reverse md:flex-row text-center gap-3 lg:gap-4 justify-between items-center pt-1 md:pt-5">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <ProductQuantityButton
                    product={product}
                    adjustQuantity={adjustQuantity}
                  />

                  <Button
                    label="Remove"
                    className="text-gray-500 font-medium  hover:underline"
                    onClick={() => removeItem(product.product_id)}
                  />
                </div>

                <p>
                  <span className="font-semibold">$22.5</span>
                  <small className="line-through">$25</small>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrderSummary = () => {
  const { state } = useContext(CartContext) || {};
  if (!state) return null;

  return (
    <section className="border border-gray-200 font-medium px-4 py-4 lg:py-8 rounded-xl mt-4 lg:mt-6 flex-2/5">
      <h2 className="text-xl md:text-2xl">Order Summary</h2>

      <div>
        {[
          ["Subtotal", `$${state.totalPrice}`],
          ["Shipping", "FREE"],
        ].map(([title, data], index) => {
          return (
            <p
              key={`order_details${index}`}
              className="text-base flex items-center justify-between mt-4"
            >
              <span className="text-gray-500">{title}</span>
              <span className="font-bold">{data}</span>
            </p>
          );
        })}
      </div>

      <hr className="border-t-2 border-t-gray-200 my-4" />

      <p className="flex items-center justify-between mb-5">
        <span className="text-base font-semibold">Total</span>
        <span className="font-bold text-2xl">${state.totalPrice}</span>
      </p>

      <Link
        href="/checkout"
        className="block w-full rounded-sm py-3 text-center px-6 font-semibold hover:bg-blue-900 text-white bg-blue-800"
      >
        Checkout
      </Link>
    </section>
  );
};

const ClearCardButton = () => {
  const { dispatch } = useContext(CartContext) || {};

  const clearCard = () => {
    if (window.confirm()) {
      dispatch?.({
        type: CartActionTypes.CLEAR_CART,
      });
    }
  };

  return (
    <Button
      label="Clear Cart"
      className="text-right pt-2 font-medium text-red-600 hover:underline w-full"
      onClick={clearCard}
    />
  );
};

export default CartPage;
