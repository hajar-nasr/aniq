"use client";

import { ChangeEvent } from "react";
import useProductReducer from "@/app/reducers/product/reducer";
// components
import Collapsable from "../Collapsable";
import ColorsIcons from "../product/ColorsIcons";

const CATEGORIES = ["Women", "Men", "Unisex"];

const FiltersColumn = () => {
  const [state] = useProductReducer();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newProducts = [];
  };

  return (
    <aside className="md:w-60 *:border-b-2 *:border-b-gray-200">
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

      {state.allProductsColors && (
        <Collapsable title="Colors">
          <ColorsIcons colors={state.allProductsColors} onClick={() => {}} />
        </Collapsable>
      )}
    </aside>
  );
};

export default FiltersColumn;
