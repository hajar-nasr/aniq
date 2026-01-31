import productInfo from "@/app/data/product-info.json";
import products from "@/app/data/products.json";
import productImages from "@/app/data/product-images.json";
import { ProductDetailsType } from "../lib/types";

const getProduct = (productId: string): ProductDetailsType | null => {
  if (!productId) return null;

  const product = products.filter((p) => p.product_id === productId);
  if (!product) return null;

  const images = productImages.filter((p) => p.product_id === productId);
  const info = productInfo.filter((p) => p.product_id === productId);

  return {
    ...product[0],
    images,
    info,
    availableColors: [...new Set(images.map((image) => image.color))],
  };
};

export default getProduct;
