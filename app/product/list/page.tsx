// components
import ProductList from "@/app/components/product/ProductList";
import FiltersColumn from "@/app/components/layout/FiltersColumn";

const ProductListPage = () => {
  return (
    <main className="flex">
      <FiltersColumn />
      <ProductList />
    </main>
  );
};

export default ProductListPage;
