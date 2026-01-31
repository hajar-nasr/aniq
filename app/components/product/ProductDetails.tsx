import { ProductDetailsType } from "@/app/lib/types";
import Collapsable from "../Collapsable";
import Button from "../core/Button";
import ColorsIcons from "./ColorsIcons";

const SIZES = ["XS", "S", "M", "L", "XL"];

const ProductDetails = ({ product }: { product: ProductDetailsType }) => {
  return (
    <section className="space-y-2 lg:space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-(--main-color)">
        {product.name}
      </h1>
      <p className="text-base text-(--secondary-color)">
        {product.description}
      </p>

      <SelectionSection title="Available Colors">
        <ColorsIcons
          colors={product.availableColors}
          onClick={() => {}}
          colorClassName="min-h-6 min-w-6 max-w-fit"
        />
      </SelectionSection>

      <SelectionSection title="Available Sizes">
        <ul className="flex items-center gap-3">
          {SIZES.map((size) => {
            return (
              <li
                key={size}
                className="bg-white rounded-sm border text-base border-gray-200 w-10 h-10 flex justify-center items-center font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                {size}
              </li>
            );
          })}
        </ul>
      </SelectionSection>

      <SelectionSection title="Quantity">
        <div className="flex gap-4 bg-gray-50 border rounded-sm border-gray-200 max-w-fit *:w-9 *:h-9 *:flex *:items-center *:justify-center font-medium text-gray-700">
          <Button
            aria-label="Increase quantity by 1"
            className="cursor-pointer"
            label="+"
          />
          <input value="1" type="text" className="text-center" />

          <Button
            aria-label="Decrease quantity by 1"
            className="cursor-pointer"
            label="-"
          />
        </div>
      </SelectionSection>

      <Button
        className="rounded-xl bg-blue-800 text-white font-medium text-base lg:text-lg w-full px-4 py-2 cursor-pointer hover:bg-blue-700"
        type="button"
        label="Add to Cart"
      />

      <MoreDetailsSection details={product.info} />
    </section>
  );
};

const SelectionSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p className="text-sm text-gray-600 font-semibold pb-2">{title}</p>
      {children}
    </div>
  );
};

const MoreDetailsSection = ({
  details,
}: {
  details: ProductDetailsType["info"];
}) => {
  return (
    <div className="[&>*:not(:last-child)]:border-b-2 [&>*:not(:last-child)]:border-b-gray-200">
      {details.map((item) => {
        return (
          <Collapsable
            title={item.title}
            key={item.title}
            titleClassName="font-semibold text-(--secondary-color)"
          >
            <ul className="pl-7 list-disc marker:text-gray-400 text-(--secondary-color)">
              {item.description.map((desc, index) => {
                return <li key={`item_desc${index}`}>{desc}</li>;
              })}
            </ul>
          </Collapsable>
        );
      })}
    </div>
  );
};

export default ProductDetails;
