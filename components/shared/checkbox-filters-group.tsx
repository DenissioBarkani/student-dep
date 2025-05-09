import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";

import { FilterCheckboxProps, FilterCheckbox } from "./filter-checkbox";

type Item = FilterCheckboxProps;

interface Props {
  items: Item[];
  title: string;
  className?: string;
  limit?: number;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items = [],
  limit = 5,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const list = showAll ? items : items.slice(0, limit);
  return (
    <div className={cn("", className)}>
      <Title size="sm" className="mb-5 font-bold" text={title} />

      <div className="space-y-2 max-h-50 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox key={index} text={item.text} value={item.value} />
        ))}
      </div>
      {items.length > limit && items.length != 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary mt-2 inline-block">
          {showAll ? "Скрыть" : "+ Показать все"}
        </button>
      )}
    </div>
  );
};
