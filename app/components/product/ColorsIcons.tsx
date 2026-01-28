const ColorsIcons = ({
  colors,
  onClick,
}: {
  colors: string[];
  onClick: (color: string) => void;
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {colors.map((color) => {
        return (
          <button
            className={`min-w-5 min-h-5 rounded-full cursor-pointer border ${color === "white" ? "border-gray-300" : "border-transparent"}`}
            key={color}
            style={{ backgroundColor: color }}
            aria-label={color}
            onClick={() => onClick(color)}
          ></button>
        );
      })}
    </div>
  );
};

export default ColorsIcons;
