import getProduct from "@/app/lib/apis/get-product";
import ProductDetails from "@/app/components/product/ProductDetails";
import ProductImagesPreview from "@/app/components/product/ProductImagesPreview";
import FeaturesTabs from "@/app/components/FeaturesTabs";
import MoreProducts from "@/app/components/MoreProducts";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { product } = (await getProduct(productId)) || {};

  return (
    <div className="space-y-8 md:space-y-10 lg:space-y-20">
      {product && (
        <section className="flex md:*:w-1/2 gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
          <ProductImagesPreview images={product.images} />
          <ProductDetails product={product} />
        </section>
      )}

      <FeaturesTabs />
      <MoreProducts title="In this Collection" />
    </div>
  );
};

export default ProductDetailsPage;
