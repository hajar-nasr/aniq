"use client";

// components
import { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductContext } from "@/app/context/ProductContext";

const ProductList = () => {
  const context = useContext(ProductContext);
  if (!context) return null;

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 flex-1"
      aria-label="Products"
    >
      {context?.products.map((item) => {
        return <ProductItem product={item} key={item.product_id} />;
      })}
    </ul>
  );
};

export default ProductList;
