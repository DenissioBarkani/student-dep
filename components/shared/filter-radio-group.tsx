import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Title } from "./title";

export interface RadioOptionProps {
  value: string;
  text: string;
}

interface Props {
  className?: string;
  options: RadioOptionProps[];
  selected: string;
  title: string;
  onValueChange: (value: string) => void;
}

export const FilterRadioGroup: React.FC<Props> = ({
  className,
  options,
  selected,
  title,
  onValueChange,
}) => {
  return (
    <>
      <Title
        size="sm"
        className="mb-5 font-bold"
        text={title}></Title>

      <RadioGroup value={selected} onValueChange={onValueChange}>
        <div className={cn("space-y-2", className)}>
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};
