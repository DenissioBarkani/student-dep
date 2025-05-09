import { Container, Tag, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
export default function ProductPage() {
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
              <p className="mb-5 pr-12 max-w-[600px]">pageOzon</p>
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
              Зарплата и бонусы
            </h3>
            <p className="text-slate-500">
              Размер твоей зарплаты будет зависеть от направления стажировки,
              региона и количества рабочих часов в неделю. А еще тебя ждут
              бонусы: единая подписка МТС Premium с онлайн-кинотеатром KION,
              доступом к сервисам МТС Музыка и Строки от МТС, корпоративная
              связь, курсы и корпоративный университет с гибкими форматами
              обучения
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

          <div className="flex flex-row min-h-[400px] max-h-[525px]">
            {/* Вакансии */}
            <ul className="gap-1 flex flex-col min-w-[240px] pr-4 border-r overflow-y-auto custom-scrollbar-left transform scale-x-[-1]">
              {" "}
              {/* Добавлен скролл */}
              <li className="p-5 bg-secondary-foreground text-secondary rounded-3xl hover:bg-secondary-foreground/90 transform scale-x-[-1]">
                <h4>Backend</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              {Array.from({ length: 10 }).map((_, index) => (
                <li
                  key={index}
                  className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                  <h4>Экономика и финансы {index + 1}</h4>
                  <span>Ростов на дону</span>
                </li>
              ))}
            </ul>

            {/* Описание */}
            <div className="flex-1 flex flex-col pl-8">
              <div className="mb-7 flex-1 overflow-y-auto custom-scrollbar">
                <div className="mb-5">
                  <h3>Научная деятельность</h3>
                  <span className="text-sm text-muted-foreground">Москва</span>
                </div>
                <p>
                  <b>В этом направлении тебе предстоит заниматься:</b>
                </p>
                <p>
                  - разработкой новых продуктов (смазочные и битумные материалы)
                </p>
                <p>
                  - обеспечением технического развития продуктового ассортимента
                  компании
                </p>
                <p>
                  - проведением переговоров с партнерами по предоставлению
                  технологий
                </p>
                <p>
                  - проведением НИОКР по перспективным направлениям развития
                </p>
                <p>- проведением испытаний продуктов</p>
                <p>
                  <b>Требования:</b>
                </p>
                <p>- высшее химическое образование</p>
                <p>- знание английского языка на уровне не ниже Intermediate</p>
                <p>- готовность работать полный день в офисе</p>
                {/* Добавьте больше текста для тестирования скролла */}
                {Array.from({ length: 10 }).map((_, index) => (
                  <p key={index}>
                    Дополнительный текст для тестирования скролла {index + 1}.
                  </p>
                ))}
              </div>

              {/* Кнопка с фиксированным позиционированием */}
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
