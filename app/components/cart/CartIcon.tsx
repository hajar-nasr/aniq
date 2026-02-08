"use client";

import { useContext } from "react";
import { CartContext } from "@/app/reducers/cart/context";
import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  const { state } = useContext(CartContext) || {};

  return (
    <Link href="/cart" className="relative cursor-pointer">
      <Image
        src="/images/icons/shopping-cart.png"
        width={24}
        height={24}
        alt=""
      />
      <span className="absolute inline-block text-lg font-bold test-red-950 p-1 rounded-full -top-6 left-1 text-(--tertiary-color)">
        {state?.items.length}
      </span>
    </Link>
  );
};

export default CartIcon;
