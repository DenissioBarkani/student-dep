import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;

}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        id={`checkbox-${String(value)}`}
        className=""
      />
      <label htmlFor={`checkbox-${String(value)}`} >{text}</label>
    </div>
  );
};
