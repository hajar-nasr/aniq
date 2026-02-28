"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../reducers/cart/context";
import { CartActionTypes } from "../reducers/cart/actions";

export default function PostPurchasePage() {
  const { dispatch } = useContext(CartContext) || {};

  useEffect(() => {
    dispatch?.({
      type: CartActionTypes.CLEAR_CART,
    });
  }, []);

  return (
    <main className="flex-1 flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-xl md:text-2xl max-w-142.5 m-auto text-(--main-color)">
          🎉 Thank you for your purchase 🎉
        </h1>

        <p className="pt-2 text-(--secondary-color) text-base max-w-3xl text-center m-auto">
          Your payment went through, and we’re getting everything ready. Keep
          exploring to{" "}
          <Link
            href="/products/list"
            className="hover:underline text-(--tertiary-color)"
          >
            find more products
          </Link>{" "}
          that fit your needs.
        </p>

        <Link
          href="/products/list"
          className="hover:bg-blue-900 bg-blue-800 text-white px-8 max-w-fit py-3 font-semibold mt-5 rounded-lg"
        >
          Shop now
        </Link>
      </div>
    </main>
  );
}
