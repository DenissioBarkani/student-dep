import { FilterSection } from "@/components/shared/filters";

// Конфигурация для страницы работодателей (поиск студентов)
export const employersFilters: FilterSection[] = [
  {
    title: "Уровень образования",
    type: "radio",
    options: [
      { value: "default", text: "Любой" },
      { value: "bachelor", text: "Бакалавриат" },
      { value: "master", text: "Магистратура" },
      { value: "specialist", text: "Специалитет" },
    ],
  },
  {
    title: "Курс обучения",
    type: "radio",
    options: [
      { value: "default", text: "Любой" },
      { value: "1-2", text: "1-2 курс" },
      { value: "3-4", text: "3-4 курс" },
      { value: "graduate", text: "Выпускник" },
    ],
  },
  {
    title: "Направление",
    type: "checkbox",
    options: [
      { value: "frontend", text: "Frontend" },
      { value: "backend", text: "Backend" },
      { value: "devops", text: "DevOps" },
      { value: "android", text: "Android" },
      { value: "ios", text: "iOS" },
      { value: "data-science", text: "Data Science" },
    ],
  },
  {
    title: "Формат работы",
    type: "checkbox",
    options: [
      { value: "remote", text: "Удаленная работа" },
      { value: "office", text: "Офис" },
      { value: "hybrid", text: "Гибридный" },
    ],
  },
];

// Конфигурация для страницы студентов (поиск компаний)
export const studentsFilters: FilterSection[] = [
  {
    title: "Направление",
    type: "checkbox",
    options: [
      { value: "IT", text: "IT" },
      { value: "RT", text: "RT" },
      { value: "BIM", text: "BIM" },
    ],
  },
  {
    title: "Формат работы",
    type: "checkbox",
    options: [
      { value: "Удаленка", text: "Удаленка" },
      { value: "Оффлайн", text: "Оффлайн" },
    ],
  },
  {
    title: "Оплата",
    type: "radio",
    options: [
      { value: "any", text: "Не важно" },
      { value: "paid", text: "Оплачиваемая" },
      { value: "unpaid", text: "Неоплачиваемая" },
    ],
  },
  {
    title: "Берут курс",
    type: "radio",
    options: [
      { value: "любой", text: "Любой" },
      { value: "1", text: "1 курс" },
      { value: "2", text: "2 курс" },
      { value: "3", text: "3 курс" },
    ],
  },
  {
    title: "Уровень зарплаты",
    type: "radio",
    options: [
      { value: "default", text: "Любая" },
      { value: "paid-intern", text: "Оплачиваемая стажировка" },
      { value: "40k", text: "от 40 000 ₽" },
      { value: "60k", text: "от 60 000 ₽" },
      { value: "80k", text: "от 80 000 ₽" },
    ],
  },
];


// {
//   title: "Технологии",
//   type: "checkbox",
//   options: [
//     { text: "React", value: "react" },
//     { text: "Vue", value: "vue" },
//     { text: "Angular", value: "angular" },
//     { text: "Node.js", value: "nodejs" },
//     { text: "Python", value: "python" },
//     { text: "Java", value: "java" },
//     { text: "Kotlin", value: "kotlin" },
//     { text: "Swift", value: "swift" },
//   ],
// },