import Button from "../core/Button";

const ColorsIcons = ({
  colors,
  colorClassName = "min-w-5 min-h-5",
  onClick,
}: {
  colors: string[];
  colorClassName?: string;
  onClick: (color: string) => void;
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((color) => {
        return (
          <Button
            className={`${colorClassName} rounded-full cursor-pointer border ${color === "white" ? "border-gray-300" : "border-transparent"}`}
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
