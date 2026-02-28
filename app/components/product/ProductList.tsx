"use client";

import { useMemo, useState } from "react";
import { Product, ProductFilters } from "@/app/lib/types";
import ProductItem from "./ProductItem";
import FiltersColumn from "@/app/components/layout/FiltersColumn";

const ProductList = ({
  products,
  colors,
}: {
  products: Product[];
  colors: string[];
}) => {
  const [filters, setFilters] = useState<ProductFilters>({
    categories: [],
    colors: [],
  });

  const filteredProducts = useMemo(() => {
    const { categories, colors } = filters;
    if (colors.length === 0 && categories.length === 0) return products;

    return products.filter((p) => {
      const matchesColor =
        colors.length === 0 ||
        p.availableColors.some((c) => {
          return colors.includes(c);
        });

      const matchesCategory =
        categories.length === 0 || categories.includes(p.category);

      return matchesCategory && matchesColor;
    });
  }, [filters, products]);

  return (
    <>
      <FiltersColumn
        colors={colors}
        setFilters={setFilters}
        filters={filters}
      />

      {filteredProducts.length ? (
        <ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 flex-1"
          aria-label="Products"
        >
          {filteredProducts?.map((item) => {
            return <ProductItem product={item} key={item.product_id} />;
          })}
        </ul>
      ) : (
        <p className="text-center w-full flex justify-center items-center text-lg text-(--tertiary-color) ">
          <span>No items match your search.</span>
        </p>
      )}
    </>
  );
};

export default ProductList;
