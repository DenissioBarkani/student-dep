import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "default";
  size?: "default" | "sm";
  className?: string;
}

export const Tag = ({
  children,
  variant = "default",
  size = "default",
  className,
}: TagProps) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-100 text-green-700",
  };

  const sizeStyles = {
    default: "text-sm px-2 py-1",
    sm: "text-xs px-1 py-0.5",
  };

  return (
    <span
      className={cn(
        "rounded inline-flex items-center",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}>
      {children}
    </span>
  );
};
