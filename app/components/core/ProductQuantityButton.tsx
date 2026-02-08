import { CartItem } from "@/app/lib/types";
import Button from "./Button";

const ProductQuantityButton = ({
  product,
  adjustQuantity,
}: {
  product: CartItem;
  adjustQuantity: (adjustBy: number, product: CartItem) => void;
}) => {
  return (
    <div className="flex gap-4 bg-gray-50 border rounded-sm border-gray-200 max-w-fit *:w-9 *:h-9 *:flex *:items-center *:justify-center font-medium text-gray-700 max-h-fit">
      <Button
        aria-label="Increase quantity by 1"
        className="cursor-pointer"
        label="+"
        onClick={() => adjustQuantity(1, product)}
      />
      <span className="text-center">{product.quantity}</span>

      <Button
        aria-label="Decrease quantity by 1"
        className="cursor-pointer"
        label="-"
        onClick={() => adjustQuantity(-1, product)}
      />
    </div>
  );
};

export default ProductQuantityButton;
