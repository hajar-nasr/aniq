import { NextResponse } from "next/server";
import { ProductImage } from "@/app/lib/types";

import productImages from "../data/product-images.json";
import productsJson from "../data/products.json";

const getProducts = () => {
  return productsJson.map((item) => {
    const images = productImages.filter(
      (image) => image.product_id === item.product_id,
    );

    return {
      ...item,
      images: groupImagesByColor(images),
      // get the products available colors
      availableColors: [...new Set(images.map((image) => image.color))],
    };
  }, []);
};

const groupImagesByColor = (images: ProductImage[]) => {
  return images.reduce(
    (acc, curr: ProductImage) => {
      const { color } = curr;

      if (Array.isArray(acc[color])) {
        acc[color].push(curr);
      } else {
        acc[color] = [curr];
      }

      return acc;
    },
    {} as Record<string, ProductImage[]>,
  );
};

export async function GET() {
  try {
    const products = getProducts();
    const allProductsColors = [
      ...new Set(productImages.map((image) => image.color)),
    ];

    return NextResponse.json({
      products,
      allProductsColors,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Failed to get products",
      },
      { status: 500 },
    );
  }
}
