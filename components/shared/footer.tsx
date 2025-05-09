import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t bg-background mt-10", className)}>
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">О компании</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Карьера
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Студентам</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Поиск стажировок
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Создать резюме
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Советы по карьере
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Работодателям</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  Разместить вакансию
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Поиск кандидатов
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Цены и услуги
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@example.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t">
        <Container className="py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col text-center md:text-start md:flex-row gap-4 text-sm text-muted-foreground order-1 md:order-2">
              <Link href="#" className="hover:text-primary">
                Условия использования
              </Link>
              <Link href="#" className="hover:text-primary">
                Политика конфиденциальности
              </Link>
            </div>
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © 2024 Название компании. Все права защищены.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
