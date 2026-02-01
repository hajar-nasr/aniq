"use client";

import useProductReducer from "@/app/reducers/product/reducer";
// components
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [state] = useProductReducer();
  if (!state?.products) return null;

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 flex-1"
      aria-label="Products"
    >
      {state?.products.map((item) => {
        return <ProductItem product={item} key={item.product_id} />;
      })}
    </ul>
  );
};

export default ProductList;
