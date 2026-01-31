"use client";
import { useParams } from "next/navigation";
import getProduct from "@/app/apis/get-product";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductImagesPreview from "@/app/components/product/ProductImagesPreview";
import FeaturesTabs from "@/app/components/FeaturesTabs";
import MoreProducts from "@/app/components/MoreProducts";

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProduct(productId);

  // TO DO: handle 404 products
  if (!product) return null;

  return (
    <div className="space-y-8 md:space-y-10 lg:space-y-20">
      <section className="flex md:*:w-1/2 gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
        <ProductImagesPreview images={product.images} />
        <ProductDetails product={product} />
      </section>

      <FeaturesTabs />
      <MoreProducts productId={product.product_id} />
    </div>
  );
};

export default ProductDetailsPage;
