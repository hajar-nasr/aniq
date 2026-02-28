import { Product } from "../types";

const getProducts = async (): Promise<{
  products: Product[];
  allProductsColors: string[];
}> => {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export default getProducts;