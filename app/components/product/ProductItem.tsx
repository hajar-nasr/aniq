"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// types
import { Product } from "@/app/lib/types";
import ColorsIcons from "./ColorsIcons";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const productAvailableColors = Object.keys(product.images || {});
  const [currentColor, setCurrentColor] = useState(productAvailableColors[0]);

  return (
    <li className="space-y-1">
      {product.images && (
        <Link
          href={`/products/item/${product.product_id}`}
          aria-label="Go to products details"
        >
          <Image
            src={product.images[currentColor][0].image_url}
            quality={70}
            className="object-cover max-h-75 min-h-75 w-full 5xl:min-h-100 mb-1 rounded-sm"
            width={300}
            height={300}
            alt=""
          />
        </Link>
      )}

      <p>{currentColor}</p>
      <p>{product.name}</p>

      <ColorsIcons onClick={setCurrentColor} colors={productAvailableColors} />
    </li>
  );
};

export default ProductItem;
