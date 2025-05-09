"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";
// import { SearchAi } from "./search-ai";
import { SearchAiV2 } from "./search-ai-v2";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  //  bg-white fixed top-0 left-0 w-full z-10
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-3 md:py-6">
        {/* Левая часть */}
        <div className="flex items-center gap-5">
          <Link className="hidden md:block" href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                className="min-h-[40] min-w-[40]"
                width={40}
                height={40}
              />
              <div className="">
                <h1 className="md:text-2xl uppercase font-black">
                  Практикс тут
                </h1>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="hidden md:block hover:text-primary transition-colors">
            Стажировки
          </Link>
          <Link
            href="/employers"
            className="hidden md:block hover:text-primary transition-colors">
            Работодателям
          </Link>
        </div>

        <SearchAiV2 className="block"></SearchAiV2>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            {/* Кнопка для десктопа (показывается только на md и больше) */}
            <Button
              variant="default"
              size="default"
              className="hidden md:flex items-center gap-1">
              <User size={16} />
              <span>Войти</span>
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
