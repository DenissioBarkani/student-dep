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
import {
  Github,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  BookOpen,
} from "lucide-react";
import { staticStudents } from "@/data/static-data";
import { useParams } from "next/navigation";

export default function StudentProfile() {
  const params = useParams();
  const student = staticStudents.find((s) => s.id === params.id);

  if (!student) {
    return <div>Студент не найден</div>;
  }

  return (
    <Container className="mt-10">
      <div className="flex gap-15">
        {/* Правая колонка с навыками и проектами */}
        <div className="flex-1">
          <div className="rounded-lg border bg-white p-6 shadow-sm space-y-8">
            <div className="">
              <Title text="О себе" size="sm" className="mb-4" />
              <p className="text-gray-500 mb-6">
                {student.aboutMe || "Описание студента отсутствует"}
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
                  src={student.imageUrl}
                  alt="Фото студента"
                  className="object-cover"
                  fill
                />
              </div>

              {/* Основная информация */}
              <div className="space-y-6">
                {/* ФИО и учебная информация */}
                <div className="space-y-4">
                  <Title text={student.name} size="sm" />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-600">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{student.university}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Направление {student.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{student.course} курс</span>
                    </div>
                  </div>
                </div>

                {/* Разделитель */}
                <div className="h-px bg-gray-100" />

                {/* Контактная информация */}
                <div className="space-y-4">
                  <Title text="Контактная информация" size="sm" />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>student@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Github className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>github.com/student</span>
                    </div>
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
