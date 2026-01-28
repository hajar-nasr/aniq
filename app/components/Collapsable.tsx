"use client";
import { useState } from "react";

type CollapsableProps = {
  title: string;
  children: React.ReactNode;
};
const Collapsable = ({ title, children }: CollapsableProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center cursor-pointer w-full text-gray-800"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        aria-label={`${collapsed ? "Expand" : "Collapse"} ${title} filters`}
        type="button"
      >
        <p className="py-3 text-medium">{title}</p>
        <span className="text-gray-400 text-xl">{collapsed ? "+" : "-"}</span>
      </button>

      {!collapsed && <div className="pb-3">{children}</div>}
    </div>
  );
};

export default Collapsable;
