"use client";

import {
  Container,
  HardSkillsChart,
  SoftSkillsChart,
  StudentProjectCard,
  StudentResume,
  Title,
} from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  BookOpen,
} from "lucide-react";
import { students } from "@/data/students";
import { useParams } from "next/navigation";

export default function StudentProfile() {
  const params = useParams();
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    return <div>Студент не найден</div>;
  }

  return (
    <Container className="mt-10">
      <div className="flex gap-15">
        {/* Правая колонка с навыками и проектами */}
        <div className="flex-1 min-w-0 ">
          <div className="rounded-lg border bg-white p-6 shadow-sm space-y-8">
            <div className="">
              <Title text="О себе" size="sm" className="mb-4" />
              <p className="text-gray-500 mb-6">
              {student?.aboutMe || "Описание студента отсутствует"}
              </p>
            </div>

            <div className="">
              <Title
                text="Основные навыки на анализе портфолио"
                size="sm"
                className="mb-4"
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm mb-2">Soft Skills</h3>
                  <SoftSkillsChart />
                </div>
                <div>
                  <h3 className="text-sm mb-2">Hard Skills</h3>
                  <HardSkillsChart />
                </div>
              </div>
            </div>

            <div className="">
              <Title text="Резюме" size="sm" className="mb-4" />
              <div className="grid grid-cols-3 gap-4">
                <StudentResume position={"Web"} experience={1}></StudentResume>
                <StudentResume
                  position={"Повар"}
                  salary={15000}
                  experience={6}></StudentResume>
                <StudentResume
                  position={"Тестирвщик"}
                  salary={20000}
                  experience={16}></StudentResume>
              </div>
            </div>

            <div className="">
              <Title text="Владение языками" size="sm" className="mb-4" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Русский</span>
                  <span className="text-sm text-gray-500">— Родной язык</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <span className="font-medium">Английский</span>
                  <span className="text-sm text-blue-600 font-medium">
                    — A1
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <Title text="Портфолио" size="sm" className="mb-4" />
              <div className="space-y-6">
                <StudentProjectCard
                  title={""}
                  description={""}
                  link={""}
                  tags={[]}></StudentProjectCard>
                <StudentProjectCard
                  title={""}
                  description={""}
                  link={""}
                  tags={[]}></StudentProjectCard>
              </div>
            </div>
          </div>
        </div>

        {/* Левая колонка с основной информацией */}
        <div className="flex-[0_0_300px]">
          <div className="rounded-lg border bg-white p-6 shadow-sm sticky top-4">
            <div className="">
              <div className="relative h-[250] mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/company/cardStudentMan.jpg"
                  alt="Фото студента"
                  className="object-cover"
                  fill
                />
              </div>

              {/* Основная информация */}
              <div className="space-y-6">
                {/* ФИО и учебная информация */}
                <div className="space-y-4">
                  <Title text="Янькин Олег Никитович" size="sm" />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-600">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>
                        Донской государственный технический университет
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Направление 09.03.04</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>2 курс</span>
                    </div>
                  </div>
                </div>

                {/* Разделитель */}
                <div className="h-px bg-gray-100" />

                {/* Контактная информация */}
                <div className="space-y-4">
                  <div className="">
                    <Title
                      text={"Предпочтительный способ связи"}
                      size="xs"></Title>
                    <Link
                      href="https://t.me/ffasaasdada"
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.032.259.019.839-.006 1.461z" />
                      </svg>
                      @ffasaasdada
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="tel:+79188551358"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Phone className="w-4 h-4" />
                      +7 (918) 855-1358
                    </Link>

                    <Link
                      href="mailto:yankint@gmail.com"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Mail className="w-4 h-4" />
                      yankint@gmail.com
                    </Link>

                    <Link
                      href="https://github.com/yankint"
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Github size={16} />
                      github.com/yankint
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
