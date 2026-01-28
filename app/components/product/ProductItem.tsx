"use client";

import { useState } from "react";
// types
import { Product } from "@/app/lib/types";
import ImagesCarousel from "../ImagesCarousel";
import ColorsIcons from "./ColorsIcons";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const productAvailableColors = Object.keys(product.images || {});
  const [currentColor, setCurrentColor] = useState(productAvailableColors[0]);

  return (
    <li>
      {product.images && (
        <ImagesCarousel
          images={product.images[currentColor]}
          key={`${currentColor}-${product.product_id}`}
        />
      )}

      <p className="mt-2">{currentColor}</p>
      <p>{product.name}</p>

      <ColorsIcons onClick={setCurrentColor} colors={productAvailableColors} />
    </li>
  );
};

export default ProductItem;
