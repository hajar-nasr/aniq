"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Collapsable from "../Collapsable";

import { ProductFilters } from "@/app/lib/types";
import Button from "../core/Button";
import clsx from "clsx";
import { CheckMark } from "../icons";

const CATEGORIES = ["Women", "Men", "Unisex"];

type Props = {
  filters: ProductFilters;
  colors: string[];
  setFilters: Dispatch<SetStateAction<ProductFilters>>;
};

const FiltersColumn = ({ filters, colors, setFilters }: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFilters(({ categories, ...prev }: ProductFilters) => {
      // toggle categories
      const newCategory = checked
        ? [...categories, name.toLowerCase()]
        : categories.filter((c) => c.toLowerCase() !== name.toLowerCase());

      return {
        ...prev,
        categories: newCategory,
      };
    });
  };

  const filterByColor = (color: string) => {
    setFilters(({ colors, ...prev }: ProductFilters) => {
      const exists = colors.includes(color);
      // toggle colors
      const newColors = exists
        ? colors.filter((c) => c !== color)
        : [...colors, color];

      return {
        ...prev,
        colors: newColors,
      };
    });
  };

  return (
    <aside className="md:w-60 *:border-b-2 *:border-b-gray-200 mb-8">
      <Collapsable title="Category">
        {CATEGORIES.map((cat) => {
          return (
            <div key={cat}>
              <input
                type="checkbox"
                id={`filter_by${cat}`}
                onChange={onChange}
                name={cat}
              />
              <label
                htmlFor={`filter_by${cat}`}
                className="pl-2 text-sm font-medium text-gray-800 cursor-pointer"
              >
                {cat}
              </label>
            </div>
          );
        })}
      </Collapsable>

      {colors && (
        <Collapsable title="Colors">
          <div className="flex gap-3 flex-wrap">
            {colors.map((color) => {
              const selected = filters.colors.includes(color);

              return (
                <Button
                  className={clsx(
                    "relative min-w-5 min-h-5 rounded-full cursor-pointer border border-transparent",
                    {
                      "border-gray-400!": color === "white",
                    },
                  )}
                  key={color}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                  onClick={() => filterByColor(color)}
                >
                  {selected && (
                    <CheckMark className="bg-black/8 rounded-full w-5 h-5 [&>svg]:w-4 [&>svg]:h-4 flex justify-center items-center" />
                  )}
                </Button>
              );
            })}
          </div>

          {Boolean(filters.colors.length) && (
            <Button
              label="Reset"
              className="text-right hover:underline text-sm pt-2 w-full"
              onClick={() => {
                setFilters((prev) => {
                  return { ...prev, colors: [] };
                });
              }}
            />
          )}
        </Collapsable>
      )}
    </aside>
  );
};

export default FiltersColumn;
