"use client";
import { useEffect, useState } from "react";
import Button from "./core/Button";

type CollapsableProps = {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};
const Collapsable = ({
  title,
  children,
  titleClassName = "",
}: CollapsableProps) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const resize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div>
      <Button
        className="flex justify-between items-center cursor-pointer w-full text-gray-800"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        aria-label={`${collapsed ? "Expand" : "Collapse"} ${title} filters`}
      >
        <p className={`py-3 text-medium ${titleClassName}`}>{title}</p>
        <span className="text-gray-400 text-xl">{collapsed ? "+" : "-"}</span>
      </Button>

      {!collapsed && <div className="pb-3">{children}</div>}
    </div>
  );
};

export default Collapsable;
