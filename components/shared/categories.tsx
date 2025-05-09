"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  className?: string;
  onCategoryChange?: (id: number) => void;
  initialActiveId?: number;
}

const defaultCategories: Category[] = [
  { id: 1, name: "IT" },
  { id: 2, name: "RT" },
  { id: 3, name: "BIM" },
];

export const Categories: React.FC<Props> = ({
  className,
  onCategoryChange,
  initialActiveId = 1,
}) => {
  const [activeId, setActiveId] = useState<number>(initialActiveId);

  const handleCategoryClick = (id: number) => {
    setActiveId(id);
    if (onCategoryChange) {
      onCategoryChange(id);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 px-1 rounded-2xl h-14 items-center",
        className
      )}>
      {defaultCategories.map(({ name, id }) => (
        <button
          key={id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          onClick={() => handleCategoryClick(id)}
          aria-current={activeId === id ? "page" : undefined}>
          {name}
        </button>
      ))}
    </div>
  );
};
