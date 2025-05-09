"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { Briefcase, Building2, User } from "lucide-react";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const TabBar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 w-full bg-background border-t md:hidden block",
        className
      )}
      aria-label="Основная навигация">
      <ul className="flex justify-between items-center h-14 px-2">
        {/* Стажировки */}
        <li className="flex-1">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center h-full gap-1 text-sm font-medium transition-colors",
              pathname === "/"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}>
            <Briefcase
              size={20}
              className={cn(
                "transition-transform",
                pathname === "/" && "scale-120"
              )}
            />
            <span className="text-xs">Стажировки</span>
          </Link>
        </li>

        {/* Работодатели */}
        <li className="flex-1">
          <Link
            href="/employers"
            className={cn(
              "flex flex-col items-center justify-center h-full gap-1 text-sm font-medium transition-colors",
              pathname === "/employers"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}>
            <Building2
              size={20}
              className={cn(
                "transition-transform",
                pathname === "/employers" && "scale-120"
              )}
            />
            <span className="text-xs">Работодатели</span>
          </Link>
        </li>

        {/* Вход */}
        <li className="flex-1">
          <Link
            href="/auth/login"
            className={cn(
              "flex flex-col items-center justify-center h-full gap-1 text-sm font-medium transition-colors",
              pathname === "/auth/login"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}>
            <User
              size={20}
              className={cn(
                "transition-transform",
                pathname === "/auth/login" && "scale-120"
              )}
            />
            <span className="text-xs">Вход</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
