import { ProductDetailsType } from "../types";

const getProduct = async (
  productId: string,
): Promise<{ product: ProductDetailsType | null } | null> => {
  try {
    const host = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(
      `${host}/api/product?productId=${productId}`,
    );

    return response.json();
  } catch {
    return null;
  }
};

export default getProduct;
