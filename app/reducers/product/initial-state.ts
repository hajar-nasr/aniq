"use client";

// data
import productImages from "@/app/data/product-images.json";
import productsJson from "@/app/data/products.json";
// types
import { Product, ProductImage } from "@/app/lib/types";

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

const getInitialProducts = () => {
  return productsJson.map((item) => {
    const images = productImages.filter(
      (image) => image.product_id === item.product_id,
    );

    return {
      ...item,
      images: groupImagesByColor(images),
    };
  }, []);
};

export const getInitialState = () => {
  const products: Product[] = getInitialProducts();
  const allProductsColors = [
    ...new Set(productImages.map((image) => image.color)),
  ];

  return {
    products,
    allProductsColors,
  };
};
