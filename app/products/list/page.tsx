import ProductList from "@/app/components/product/ProductList";
import getProducts from "@/app/lib/apis/get-products";

const ProductListPage = async () => {
  const { products, allProductsColors } = await getProducts();

  return (
    <main className="flex">
      <ProductList products={products} colors={allProductsColors} />
    </main>
  );
};

export default ProductListPage;
