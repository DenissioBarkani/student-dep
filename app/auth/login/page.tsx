"use client";
import { Container, Title } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-210px)] flex items-center justify-center">
        <Card className="p-6 w-full max-w-[440px]">
          <div className="text-center">
            <Title size="xl" className="font-semibold" text="Вход в аккаунт" />
            <p className="text-muted-foreground">Введите вашу почту и пароль</p>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-2">
              <label className="block text-sm font-medium">Почта</label>
              <Input
                type="email"
                placeholder="example@mail.com"
                className="focus-visible:ring-primary"
              />
            </div>

            <div className="grid gap-2">
              <label className="block text-sm font-medium">Пароль</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="focus-visible:ring-primary"
              />
            </div>

            {/* Кнопка */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90">
              Продолжить
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  );
}
