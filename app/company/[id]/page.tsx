"use client";
import { Container, Tag, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
import { useState } from "react";

type Block = {
  title: string;
  content: string[];
};

type Position = {
  id: string;
  title: string;
  location: string;
  blocks: Block[];
};

export default function ProductPage() {
  const [selectedPosition, setSelectedPosition] = useState<string>("backend");

  const positions: Position[] = [
    {
      id: "backend",
      title: "Backend",
      location: "Вся Россия",
      blocks: [
        {
          title: "Ты подходишь, если:",
          content: [
            "знаешь Java, C#",
            "работал с Git, Jira, Confluence",
            "понимаешь современные принципы и технологии системной интеграции: Kafka, REST",
            "понимаешь принципы микросервисной архитектуры",
          ],
        },
        {
          title: "На стажировке ты будешь:",
          content: [
            "взаимодействовать с серверной частью веб-приложения",
            "исправлять баги и улучшать пользовательский опыт",
            "тестировать собственный код",
            "оптимизировать и рефакторить существующие решения",
          ],
        },
        {
          title: "Бонусы и преимущества:",
          content: [
            "гибкий график работы",
            "возможность удаленной работы",
            "обучение и развитие",
            "корпоративные мероприятия",
          ],
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      location: "Москва",
      blocks: [
        {
          title: "Ты подходишь, если:",
          content: [
            "знаешь JavaScript/TypeScript",
            "опыт работы с React/Next.js",
            "понимание принципов UI/UX",
            "знание современных инструментов разработки",
          ],
        },
        {
          title: "На стажировке ты будешь:",
          content: [
            "разработка пользовательского интерфейса",
            "оптимизация производительности",
            "работа с API",
            "тестирование и отладка",
          ],
        },
      ],
    },
    {
      id: "fullstack",
      title: "Fullstack",
      location: "Санкт-Петербург",
      blocks: [
        {
          title: "Ты подходишь, если:",
          content: [
            "знание frontend и backend технологий",
            "опыт работы с базами данных",
            "понимание принципов DevOps",
            "умение работать в команде",
          ],
        },
        {
          title: "На стажировке ты будешь:",
          content: [
            "разработка полного стека приложения",
            "интеграция различных сервисов",
            "оптимизация работы приложения",
            "участие в планировании архитектуры",
          ],
        },
        {
          title: "Условия работы:",
          content: [
            "офис в центре города",
            "комфортное рабочее место",
            "современное оборудование",
            "медицинская страховка",
          ],
        },
      ],
    },
    {
      id: "devops",
      title: "DevOps",
      location: "Вся Россия",
      blocks: [
        {
          title: "Ты подходишь, если:",
          content: [
            "знание Docker, Kubernetes",
            "опыт работы с CI/CD",
            "понимание принципов мониторинга",
            "знание облачных платформ",
          ],
        },
        {
          title: "На стажировке ты будешь:",
          content: [
            "настройка и поддержка инфраструктуры",
            "автоматизация процессов разработки",
            "мониторинг и логирование",
            "обеспечение безопасности",
          ],
        },
        {
          title: "Карьерный рост:",
          content: [
            "четкий план развития",
            "регулярные оценки",
            "возможность повышения",
            "участие в конференциях",
          ],
        },
      ],
    },
    {
      id: "qa",
      title: "QA Engineer",
      location: "Москва",
      blocks: [
        {
          title: "Ты подходишь, если:",
          content: [
            "знание методологий тестирования",
            "опыт работы с инструментами тестирования",
            "понимание принципов автоматизации",
            "знание SQL и API",
          ],
        },
        {
          title: "На стажировке ты будешь:",
          content: [
            "разработка тест-кейсов",
            "проведение тестирования",
            "автоматизация тестов",
            "анализ результатов",
          ],
        },
        {
          title: "Обучение и развитие:",
          content: [
            "внутренние тренинги",
            "курсы и сертификации",
            "менторство",
            "обмен опытом",
          ],
        },
      ],
    },
    
  ];

  const currentPosition =
    positions.find((pos) => pos.id === selectedPosition) || positions[0];

  return (
    <div>
      <Container className="mt-10">
        <section className="rounded-xl border shadow mb-12 p-12">
          <div className="flex justify-between">
            <div className="flex flex-col h-auto">
              <Title
                className="font-extrabold mb-5"
                size="lg"
                text={"Начни карьеру вместе с МТС Финтех"}></Title>
              <p className="mb-5 pr-12 max-w-[600px]">
                Мы приглашаем стажёров от 16 лет, и нам не важно, какие вузы и
                курсы ты закончил. На стажировке тебя ждёт полное погружение в
                ИТ-индустрию. С первого дня ты будешь работать с реальными
                задачами и набираться опыта, а ментор и коллеги будут
                поддерживать тебя и делиться своей экспертизой. Ну что, готов
                стартануть в ИТ?
              </p>
              <Button
                className="mt-auto self-start"
                textSize={"lg"}
                size={"lgx2"}>
                Подать заявку
              </Button>
            </div>

            <div className="flex-shrink-0 w-[300px] h-[300px] rounded-xl overflow-hidden ml-8">
              <Image
                src="/company/frame_1948757295_small.webp"
                width={1500}
                height={876}
                alt="MTS Fintech"
                className="w-full h-full object-cover"
                priority
                // style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </section>

        <div className="p-12 mb-12 shadow col-span-2 rounded-xl border">
          <div className="mb-4">
            <Title
              className="font-extrabold mb-4"
              size="lg"
              text={"О компании"}></Title>
            <p className="text-muted-foreground mb-4">
              Крупнейшая российская телекоммуникационная компания,
              предоставляющая услуги связи и интернета. Входит в топ-5
              крупнейших компаний России по капитализации.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Сферы деятельности</h3>
            <div className="flex flex-wrap gap-2">
              <Tag variant="blue">Информационные технологии</Tag>
              <Tag variant="blue">Системная интеграция</Tag>
              <Tag variant="blue">Интернет</Tag>
              <Tag variant="blue">Финансовый сектор</Tag>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <h3 className="font-semibold mb-2">Официальный сайт </h3>
            <Link
              href="https://mts.ru"
              target="_blank"
              className="text-primary hover:underline">
              https://mts.ru
            </Link>
          </div>
        </div>

        {/* 0_0_15px_rgba(0,0,0,0.02) */}
        <div className="grid grid-cols-6 gap-6 mb-12">
          <div className="shadow col-span-2 p-8 rounded-3xl border">
            <h3 className="text-lg font-medium mb-3 text-primary/90">
              Зарплата и бонусы
            </h3>
            <p className="text-slate-500">
              250+ продуктов, в которых можешь решать интересные задачи, которые
              будут развивать тебя, компанию и мир! После стажировки у тебя
              будет возможность остаться в команде МТС
            </p>
          </div>
          <div className="shadow col-span-2 p-8 rounded-3xl border">
            <h3 className="text-lg font-medium mb-3 text-primary/90">
              Гибкий график
            </h3>
            <p className="text-slate-500">
              Совмещать стажировку с учебой или хобби? Легко! На стажировке в
              МТС ты можешь обсудить свой график с руководителем, чтобы
              сбалансировать нагрузку. В зависимости от вакансии ты будешь
              работать от 20 до 40 часов в неделю
            </p>
          </div>
          <div className="shadow col-span-2 p-8 rounded-3xl border">
            <h3 className="text-lg font-medium mb-3 text-primary/90">
              Опыт работы
            </h3>
            <p className="text-slate-500">
              Мы рассматриваем кандидатов, у которых есть опыт работы, а также
              берем на стажировку тех, кто только собирается сделать первый шаг
              в карьере
            </p>
          </div>
          <div className="shadow col-span-3 p-8 rounded-3xl border">
            <h3 className="text-lg font-medium mb-3 text-primary/90">
              Обучение
            </h3>
            <p className="text-slate-500">
              Корпоративный университет, обучение у&nbsp;внешних экспертов,
              внутренние мероприятия: хакатоны, олимпиады, конференции. Можно
              освоить новые навыки, прокачать скилы и&nbsp;повысить свою
              ценность для&nbsp;работодателя
            </p>
          </div>
          <div className="shadow col-span-3 p-8 rounded-3xl border">
            <h3 className="text-lg font-medium mb-3 text-primary/90">
              Открытые вакансии весь год
            </h3>
            <p className="text-slate-500">
              Начать стажировку в МТС можно в любое время. Выбирай интересующее
              направление и отправляй заявку прямо сейчас
            </p>
          </div>
        </div>

        <section className="p-12 w-full rounded-xl border shadow flex flex-col">
          <Title
            className="font-extrabold mb-8"
            size="lg"
            text={"Реализуй себя в одном из направлений"}></Title>

          <div className="flex flex-row min-h-[550px] max-h-[550px]">
            {/* Вакансии */}
            <ul className="gap-1 flex flex-col min-w-[240px] overflow-y-auto custom-scrollbar-left transform scale-x-[-1]">
              {positions.map((position) => (
                <li
                  key={position.id}
                  className={`p-5 rounded-3xl bg-accent transform scale-x-[-1] cursor-pointer ${
                    selectedPosition === position.id
                      ? "bg-secondary-foreground text-secondary"
                      : ""
                  }`}
                  onClick={() => setSelectedPosition(position.id)}>
                  <h4 className="font-semibold">{position.title}</h4>
                  <span>{position.location}</span>
                </li>
              ))}
            </ul>

            {/* Описание */}
            <div className="flex-1 flex flex-col pl-8">
              <div className="mb-4 flex-1 overflow-y-auto custom-scrollbar">
                <div className="mb-5">
                  <h4 className="font-bold text-3xl">
                    {currentPosition.title}
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    {currentPosition.location}
                  </span>
                </div>
                <div className="max-w-3/4">
                  {currentPosition.blocks.map((block, index) => (
                    <div key={index} className="mb-6">
                      <h2 className="mb-1 mt-3 text-lg font-bold">
                        {block.title}
                      </h2>
                      {block.content.map((item, itemIndex) => (
                        <p key={itemIndex}>- {item}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bottom-0 pt-4">
                <Button size={"lgx2"} textSize={"lg"} className="w-auto">
                  Подать заявку
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
