"use client";

import useProductReducer from "../reducers/product/reducer";
import ProductItem from "./product/ProductItem";
import Link from "next/link";

const MoreProducts = ({
  title,
  productId,
}: {
  title: string;
  productId?: string;
}) => {
  const [state] = useProductReducer();
  if (!state?.products?.length) return null;

  return (
    <section className="w-full">
      <h2 className="text-(--main-color) pb-5 text-2xl md:text-3xl">{title}</h2>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {state.products
          .filter((p) => p.product_id !== productId)
          .slice(11, 15)
          .map((item) => {
            return <ProductItem product={item} key={item.product_id} />;
          })}
      </ul>

      <Link
        href="/products/list"
        className="text-right font-semibold block pt-3 hover:underline text-(--secondary-color)"
      >
        See All Products
      </Link>
    </section>
  );
};

export default MoreProducts;
