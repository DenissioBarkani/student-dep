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
  aboutMe?: string;
}

export const students: Student[] = [
  {
    id: "1",
    name: "Янькин Олег Никитович",
    university: "Донской государственный технический университет",
    course: 2,
    specialty: "09.03.04",
    salary: 10500,
    imageUrl: "/company/cardStudent.jpg",
    desiredPositions: ["Web-разработчик", "Повар"],
    skills: ["C++", "Командная работа", "NextJS"],
    aboutMe:
      "Увлеченный разработчик, специализирующийся на создании веб-приложений. Имею опыт работы с современными технологиями и фреймворками. Активно изучаю новые инструменты разработки и всегда готов к новым вызовам.",
  },
  {
    id: "2",
    name: "Иванов Иван Иванович",
    university: "Донской государственный технический университет",
    course: 3,
    specialty: "09.03.04",
    salary: 15000,
    imageUrl: "/company/cardStudentGirl.webp",
    desiredPositions: ["Frontend Developer", "UI/UX Designer"],
    skills: ["React", "TypeScript", "Figma"],
    aboutMe:
      "Креативный разработчик с фокусом на создание пользовательских интерфейсов. Увлекаюсь дизайном и разработкой современных веб-приложений. Имею опыт работы в команде и готов к новым проектам.",
  },
];
