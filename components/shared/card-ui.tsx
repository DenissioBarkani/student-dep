import { cn } from "@/lib/utils";

interface cardProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "default";
  className?: string;
}

export const CardUI = ({
  children,
  variant = "default",
  className,
}: cardProps) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-100 text-green-700",
  };

  // const sizeStyles = {
  //   default: "text-sm px-2 py-1",
  //   xl: "text-xs px-1 py-0.5",
  // };

  return (
    <div
      className={cn(
        "shadow rounded-xl border",
        variantStyles[variant],
        className
      )}>
      {children}
    </div>
  );
};
