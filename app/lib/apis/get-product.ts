import { ProductDetailsType } from "../types";

const getProduct = async (
  productId: string,
): Promise<{ product: ProductDetailsType | null } | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/product?productId=${productId}`,
    );

    return response.json();
  } catch {
    return null;
  }
};

export default getProduct;
