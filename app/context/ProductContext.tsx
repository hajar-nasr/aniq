"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";
// data
import productImages from "@/app/data/product-images.json";
import productsJson from "@/app/data/products.json";
// types
import { Product, ProductImage } from "@/app/lib/types";

export type ProductContextType = {
  allProductsColors: string[];
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);

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

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialProducts: Product[] = getInitialProducts();
  const allProductsColors = [
    ...new Set(productImages.map((image) => image.color)),
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);

  return (
    <ProductContext.Provider
      value={{
        allProductsColors,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
