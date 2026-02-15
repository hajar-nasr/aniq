import ProductItem from "./product/ProductItem";
import Link from "next/link";
import { shuffle } from "lodash";
import getProducts from "@/app/lib/apis/get-products";

const MoreProducts = async ({ title }: { title: string }) => {
  const { products } = await getProducts();

  const getRandomProducts = (number: number) => {
    if (!products?.length) return [];

    if (products.length <= number) {
      number = products.length;
    }

    const shuffled = shuffle(products);
    return shuffled.slice(0, number);
  };

  return (
    <section className="w-full">
      <h2 className="text-(--main-color) pb-5 text-2xl md:text-3xl">{title}</h2>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {getRandomProducts(4).map((item) => {
          return <ProductItem product={item} key={item.product_id} />;
        })}
      </ul>

      <Link
        href="/products/list"
        className="text-right font-semibold block pt-3 hover:underline text-(--secondary-color)"
      >
        See All Products
      </Link>
    </section>
  );
};

export default MoreProducts;
