import { CompanyProps } from "@/components/shared/company-card";
import { Student } from "@/components/shared/employers/student-card";

export const staticCompanies: CompanyProps[] = [
  {
    id: 1,
    name: "Сбер",
    imageUrl:
      "https://it.fut.ru/api/storage/api/files/show-img/c1b7b1f3-62d1-4cdc-a55f-886da21e9341_small.webp",
    description:
      "Работайте в крупнейшем банке России над инновационными финансовыми технологиями",
    tags: [
      { id: 1, text: "Оффлайн" },
      { id: 2, text: "Соцпакет" },
      { id: 3, text: "Карьера" },
    ],
    deadline: "20 февраля",
    places: 15,
  },
  {
    id: 2,
    name: "Яндекс",
    imageUrl:
      "https://fut.ru/api/storage/api/files/show-img/9e707d4b-d14d-4800-b67c-1cdfc8bb796b_small.webp",
    description:
      "Присоединяйтесь к команде Яндекс.Практикума и помогайте студентам становиться разработчиками",
    tags: [
      { id: 1, text: "Оффлайн" },
      { id: 2, text: "Гибкий график" },
      { id: 3, text: "Обучение" },
    ],
    deadline: "15 января",
    places: 5,
  },
  {
    id: 3,
    name: "VK",
    imageUrl:
      "https://it.fut.ru/api/storage/api/files/show-img/0e88ee2e-8398-48f8-8c7a-6997032b6b07_small.webp",
    description:
      "Развивайте интернет-экосистему вместе с ведущей технологической компанией",
    tags: [
      { id: 1, text: "Удаленка" },
      { id: 2, text: "Молодая команда" },
      { id: 3, text: "Стартап" },
    ],
    deadline: "10 марта",
    places: 8,
  },
  {
    id: 4,
    name: "Озон",
    imageUrl: "/company/sapka_dlia_kataloga_small.png",
    description:
      "Стань частью крупнейшей IT-экосистемы страны, участвуй в реальных задачах, решение которых принесет пользу клиентам и нашим сотрудникам",
    tags: [
      { id: 1, text: "Удаленка" },
      { id: 2, text: "Гибкий график" },
      { id: 3, text: "Оффлайн" },
    ],
    deadline: "31 декабря",
    places: 10,
  },
];

export const staticStudents: Student[] = [
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
  },
  {
    id: "3",
    name: "Петрова Анна Сергеевна",
    university: "СПбГУ",
    course: 4,
    specialty: "Программная инженерия",
    salary: 60000,
    imageUrl: "/company/cardStudentGirl.webp",
    desiredPositions: ["Fullstack", "DevOps"],
    skills: ["Python", "Django", "Docker", "AWS"],
  },
  {
    id: "4",
    name: "Смирнов Алексей Дмитриевич",
    university: "МФТИ",
    course: 2,
    specialty: "Компьютерные науки",
    salary: 45000,
    imageUrl: "/company/cardStudent.jpg",
    desiredPositions: ["Mobile", "Frontend"],
    skills: ["Swift", "Kotlin", "React Native", "UI/UX"],
  },
];
