import { clsx } from "clsx";
import Button from "../core/Button";

type Props = {
  colors: string[];
  onClick: (color: string) => void;
};

const ColorsIcons = ({ colors, onClick }: Props) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((color) => {
        return (
          <Button
            className={clsx(
              "min-w-5 min-h-5 rounded-full cursor-pointer border border-transparent",
              {
                "border-gray-300!": color === "white",
              },
            )}
            key={color}
            style={{ backgroundColor: color }}
            aria-label={color}
            onClick={() => onClick(color)}
          />
        );
      })}
    </div>
  );
};

export default ColorsIcons;
