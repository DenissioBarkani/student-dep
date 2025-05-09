import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Импортируем компонент Image
import { cn } from "@/lib/utils";
import { Tag } from "./tag";


interface CompanyTag {
  id: number;
  text: string;
}

export interface CompanyProps {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  tags: CompanyTag[];
  deadline: string;
  places: number;
  className?: string;
}

export const CompanyCard: React.FC<CompanyProps> = ({
  id,
  name,
  imageUrl,
  description,
  tags,
  deadline,
  places,
  className,
}) => {

  return (
    <Link
      href={`/company/${id}`}
      className={cn(
        "h-full flex flex-col rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg",
        className
      )}>
      <div className="relative h-56">
        <Image
          src={imageUrl}
          width={1140}
          height={900}
          alt={name}
          className="h-full object-cover object-top md:object-top"
          loading={id > 5 ? "eager" : "lazy"}
          priority={id <= 5 ? false : true}
        />
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Tag
              className="px-2 py-1 bg-muted rounded-[4px] text-[10px] text-muted-foreground"
              key={tag.id}
              variant="default"
              size="sm">
              {tag.text}
            </Tag>
          ))}
        </div>

        <Title
          text={name}
          size="sm"
          className="text-lg font-medium mb-2.5 leading-5"
        />

        <div className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-4">
            {description}
          </p>
        </div>

        <div className="mt-2.5">
          <time
            dateTime="2023-12-31"
            className="inline-block px-2 py-1 text-[10px] text-time-secondary bg-time-primary rounded-lg">
            Приём заявок до: {deadline}
          </time>

          <div className="flex justify-between items-center">
            <div className="text-base">
              <span className="text-primary font-semibold">{places}</span> мест
            </div>

            <Button
              variant="link"
              size={"link"}
              textSize={"lg"}
              className="gap-1 text-lg">
              Подробнее
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
