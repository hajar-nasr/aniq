"use client";

import { useContext, useMemo, useState } from "react";
import { clsx } from "clsx";
import { CartContext } from "@/app/reducers/cart/context";
import { CartItem, ProductDetailsType } from "@/app/lib/types";
import Collapsable from "../Collapsable";
import Button from "../core/Button";
import ProductQuantityButton from "../core/ProductQuantityButton";
import { CartActionTypes } from "@/app/reducers/cart/actions";
import { CheckMark } from "../icons";

const SIZES = ["XS", "S", "M", "L", "XL"];

const ProductDetails = ({ product }: { product: ProductDetailsType }) => {
  const { dispatch, state } = useContext(CartContext) || {};

  const initialItem = {
    quantity: 1,
    description: product.description,
    product_id: product.product_id,
    color: product.availableColors[0],
    name: product.name,
  } as CartItem;

  // check if the item exists in cart
  const itemInCart = useMemo(() => {
    return state?.items.find((item) => item.product_id === product.product_id);
  }, [state?.items, product.product_id]);

  const [cartItem, setCartItem] = useState(itemInCart || initialItem);

  const updateState = (key: string, value: string | number) => {
    setCartItem((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const adjustQuantity = (adjustBy: number, product: CartItem) => {
    if (adjustBy < 0 && product.quantity <= 1) return;

    setCartItem(({ quantity, ...rest }) => {
      return {
        ...rest,
        quantity: quantity + adjustBy,
      };
    });
  };

  const isAddToCartDisabled =
    !cartItem.size || !cartItem.quantity || !cartItem.color;

  const addToCart = () => {
    // find the image based on the selected color
    const imageUrl = product.images.find(
      (img) => img.color === cartItem.color,
    )?.image_url;

    const price = product.discount ? product.sale_price : product.list_price;

    // if item exists in cart, update it with the latest inputs from user
    if (itemInCart) {
      dispatch?.({
        type: CartActionTypes.UPDATE_CART_ITEM,
        productId: itemInCart.product_id,
        updatedFields: {
          ...cartItem,
          image_url: imageUrl || product.images[0].image_url,
          price,
          priceBeforeSale: product.list_price,
        },
      });
      return;
    }

    // add item to cart
    dispatch?.({
      type: CartActionTypes.ADD_TO_CART,
      cartItem: {
        ...cartItem,
        image_url: imageUrl || product.images[0].image_url,
        price,
        priceBeforeSale: product.list_price,
      },
    });
  };

  return (
    <section className="space-y-2 lg:space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-(--main-color)">
        {product.name}
      </h1>

      <p className="text-lg font-semibold">
        <span>
          ${product.discount ? product.sale_price : product.list_price}{" "}
        </span>

        {product.discount && (
          <span className="text-sm line-through text-gray-400">
            ${product.list_price}
          </span>
        )}
      </p>

      {product.discount_percentage && (
        <span className="font-bold text-sm inline-block px-3 py-0.5 bg-amber-100 border border-amber-600 rounded-4xl text-amber-600">
          {product.discount_percentage}% OFF
        </span>
      )}

      <p className="text-base text-(--secondary-color)">
        {product.description}
      </p>

      <SelectionSection title="Available Colors">
        <div className="flex gap-2">
          {product.availableColors.map((color) => {
            const selected = color === cartItem.color;

            return (
              <Button
                className={clsx(
                  "relative min-h-8 min-w-8 rounded-full cursor-pointer border border-transparent ",
                  {
                    "border-gray-400!": color === "white",
                  },
                )}
                key={color}
                style={{ backgroundColor: color }}
                aria-label={color}
                onClick={() => updateState("color", color)}
              >
                {selected && <CheckMark className="bg-black/8 rounded-full" />}
              </Button>
            );
          })}
        </div>
      </SelectionSection>

      <SelectionSection title="Available Sizes">
        <ul className="flex items-center gap-3">
          {SIZES.map((size) => {
            const selected = size === cartItem.size;
            return (
              <li
                key={size}
                className={`${selected ? "bg-gray-200" : "bg-white hover:bg-gray-50"}  rounded-sm border text-base border-gray-200 w-10 h-10 flex justify-center items-center font-medium text-gray-600`}
              >
                <Button
                  label={size}
                  onClick={() => updateState("size", size)}
                  className="w-full h-full"
                />
              </li>
            );
          })}
        </ul>
      </SelectionSection>

      <SelectionSection title="Quantity">
        <ProductQuantityButton
          adjustQuantity={adjustQuantity}
          product={cartItem}
        />
      </SelectionSection>

      <Button
        className={`${isAddToCartDisabled ? "opacity-70" : ""} rounded-xl bg-blue-800 text-white font-medium text-base lg:text-lg w-full px-4 py-2 cursor-pointer hover:bg-blue-700`}
        type="button"
        label={Boolean(itemInCart) ? "Update Product" : "Add to Cart"}
        onClick={addToCart}
        disabled={isAddToCartDisabled}
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
