import { cn } from "@/lib/utils";
import { Tag } from "../tag";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  link: string;
  tags: string[];
  className?: string;
}

export function StudentProjectCard({
  className,
  // title,
  // description,
  // link,
  // tags,
}: Props) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="rounded-lg border bg-white p-6 hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Мобильное приложение для фитнеса
            </h3>
            <p className="text-sm text-muted-foreground">
              Создание мобильного приложения для отслеживания тренировок и
              питания. Включает в себя создание программ тренировок,
              отслеживание прогресса и статистику.
            </p>
          </div>
          <a
            href="#"
            className="p-2 text-muted-foreground hover:text-muted-foreground-dark hover:bg-muted-foreground/5 rounded-lg">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blue">React Native</Tag>
          <Tag variant="blue">Firebase</Tag>
          <Tag variant="blue">Redux</Tag>
        </div>
      </div>
    </div>
  );
}
