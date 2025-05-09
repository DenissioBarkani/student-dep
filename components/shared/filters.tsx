"use client";
import { cn } from "@/lib/utils";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterRadioGroup, RadioOptionProps } from "./filter-radio-group";
import React from "react";
import { FilterCheckboxProps } from "./filter-checkbox";

export interface FilterSection {
  title: string;
  type: "radio" | "checkbox";
  options: RadioOptionProps[] | FilterCheckboxProps[];
}

interface Props {
  className?: string;
  sections: FilterSection[];
}

export const Filters: React.FC<Props> = ({ className, sections = [] }) => {
  const [radioValues, setRadioValues] = React.useState<Record<number, string>>(
    {}
  );
  return (
    <div className={cn("hidden w-full md:block md:w-[250px]", className)}>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            {section.type === "radio" ? (
              <FilterRadioGroup
                options={section.options as RadioOptionProps[]}
                selected={radioValues[index] || section.options[0].value}
                // ------Разобраться в коде----------
                onValueChange={(value) =>
                  setRadioValues((prev) => ({
                    ...prev,
                    [index]: value,
                  }))
                }
                // -------------------
                title={section.title}
              />
            ) : (
              <CheckboxFiltersGroup
                title={section.title}
                items={section.options as FilterCheckboxProps[]}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
