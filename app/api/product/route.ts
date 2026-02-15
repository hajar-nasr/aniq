import { NextResponse, NextRequest } from "next/server";
import productInfo from "../data/product-info.json";
import products from "../data/products.json";
import productImages from "../data/product-images.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  try {
    const productId = searchParams.get("productId");
    const product = products.find((p) => p.product_id === productId);

    if (!product)
      return NextResponse.json({
        product: null,
        status: 404,
      });

    const images = productImages.filter((p) => p.product_id === productId);
    const info = productInfo.filter((p) => p.product_id === productId);

    return NextResponse.json({
      product: {
        ...product,
        images,
        info,
        availableColors: [...new Set(images.map((image) => image.color))],
      },
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
