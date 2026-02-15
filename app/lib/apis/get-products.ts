import { Product } from "../types";

const getProducts = async (): Promise<{
  products: Product[];
  allProductsColors: string[];
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/products`,
    );

    return response.json();
  } catch {
    throw Error("Failed to fetch products");
  }
};

export default getProducts;
