import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tag } from "../tag";
import { CardHover } from "@/components/ui/card";

export interface Student {
  id: string;
  name: string;
  university: string;
  course: number;
  specialty: string;
  salary: number;
  imageUrl: string;
  desiredPositions: string[];
  skills: string[];
}

interface Props {
  student: Student;
  className?: string;
}

export const StudentCard: React.FC<Props> = ({ className, student }) => {
  return (
    <CardHover className={cn("p-4", className)}>
      <article className="student-profile">
        <Link
          href={`/student/${student.id}`}
          className="block hover:no-underline">
          <div className="grid grid-cols-[140px_1fr] gap-6">
            <div className="h-24">
              <Image
                src={student.imageUrl}
                width={100}
                height={100}
                className="rounded-lg w-auto h-full object-cover"
                alt="Фото профиля студента"
                loading="lazy"
              />
            </div>

            <div className="min-h-[96px] flex flex-col justify-between">
              <div className="">
                <h2 className="text-xl font-medium text-primary">
                  {student.name}
                </h2>
                <div className="text-sm text-muted-foreground">
                  <p>{student.university}</p>
                  <div className="flex gap-1">
                    <p>Курс {student.course} -</p>
                    <p>Направление {student.specialty}</p>
                  </div>
                </div>
                <p className="font-medium">От: {student.salary} ₽</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-6 pt-4 border-t-1 mt-4">
            <p className="text-sm text-muted-foreground flex items-center">
              Желаемые вакансии
            </p>
            <div className="flex flex-wrap gap-4">
              {student.desiredPositions.map((position) => (
                <Tag variant="blue" key={position}>
                  {position}
                </Tag>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-6 pt-4 border-t-1 mt-4">
            <p className="text-sm text-muted-foreground flex items-center">
              Основные навыки
            </p>
            <div className="flex flex-wrap gap-4">
              {student.skills.map((skill) => (
                <Tag variant="green" key={skill}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        </Link>
      </article>
    </CardHover>
  );
};
