"use client";

import { useCompanyContext } from "@/lib/hooks/CompanyContext";
import { cn } from "@/lib/utils";
import { Loader2, Paperclip, Search, Send, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";

interface SearchAiV2Props {
  className?: string;
}

export const SearchAiV2 = ({ className }: SearchAiV2Props) => {
  const [isAiMode, setIsAiMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [hasValue, setHasValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { setCompanies, setSearch } = useCompanyContext();

  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHasFile(true);
      console.log("Selected file:", file);
    } else {
      setHasFile(false);
    }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchText = formData.get("search") as string;
    const file = formData.get("file") as File | null;
    const hasValidFile = file && file.size > 0;

    if (!searchText?.trim() && !hasValidFile) {
      alert("Введите данные или прикрепите файл");
      return;
    }

    try {
      setIsLoading(true);

      // Always return the same three companies regardless of search input
      const filteredCompanies = [
        {
          id: 1,
          name: "Начни карьеру в ИТ",
          imageUrl:
            "https://cdn-it.fut.ru/api/storage/api/files/show-img/3481cc66-fece-4a4c-85e8-ba7b50251c2c_small.webp",
          description:
            "На стажировке тебя ждет полное погружение в ИТ-индустрию. С первого дня ты будешь работать с реальными задачами и набираться опыта, а ментор и коллеги будут поддерживать тебя и делиться своей экспертизой",
          tags: [
            { id: 1, text: "Удаленка" },
            { id: 2, text: "Берут выпускников" },
            { id: 3, text: "Гибкий график" },
          ],
          deadline: "10 марта",
          places: 8,
        },
        {
          id: 2,
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
        {
          id: 3,
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
      ];

      setCompanies(filteredCompanies);
      setSearch(true);

      if (formRef.current) {
        formRef.current.reset();
        setHasFile(false);
        setHasValue("");
      }
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    } catch (error) {
      console.error("Ошибка поиска:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className={cn("md:mx-10 flex-1", className)}>
        <form
          ref={formRef}
          onSubmit={submit}
          className="flex rounded-2xl flex-1 justify-between h-11 z-30">
          {/* Режим формы поиск/AI */}
          <div className="flex items-center bg-gray-100 p-1 pl-2 rounded-l-2xl">
            <div className="flex items-center rounded-lg gap-1">
              <button
                type="button" // Добавляем это
                onClick={(e) => {
                  e.preventDefault(); // Предотвращаем submit
                  setIsAiMode((prev) => !prev);
                }}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-500 ease-in-out",
                  !isAiMode
                    ? "bg-white shadow-sm text-primary translate-x-8"
                    : "hover:bg-gray-200 translate-x-0"
                )}>
                <Search className="h-4 w-4" />
              </button>
              <button
                type="button" // Добавляем это
                onClick={(e) => {
                  e.preventDefault(); // Предотвращаем submit
                  setIsAiMode((prev) => !prev);
                }}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-500 ease-in-out",
                  isAiMode
                    ? "bg-white shadow-sm text-primary translate-x-0"
                    : "hover:bg-gray-200 -translate-x-8"
                )}>
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Поиск/Форма */}
          <div className="flex-1 flex items-center bg-gray-100 relative">
            {isAiMode ? (
              <>
                <div className="flex-1 flex"></div>
                <textarea
                  name="search"
                  ref={textareaRef}
                  onInput={autoResizeTextarea}
                  suppressHydrationWarning
                  className="outline-none w-full p-2 min-h-[42px] max-h-[200px] top-0.5 bg-gray-100 rounded-2xl resize-none absolute left-0 overflow-y-auto"
                  placeholder={"Найти с помощью AI..."}
                  defaultValue=""
                  rows={1}
                />
              </>
            ) : (
              <input
                name="search"
                onChange={(event) => setHasValue(event.target.value)}
                className="rounded-2xl outline-none w-full p-2 bg-gray-100"
                type="text"
                placeholder={"Поиск..."}
                defaultValue=""
              />
            )}
          </div>

          {/* фаил / отправить */}
          <div className="flex items-center bg-gray-100 p-1 pr-2 rounded-r-2xl">
            <div className="flex items-center">
              {!isAiMode && (
                <button
                  type="button"
                  className={cn(
                    "hidden p-1.5 mr-1 rounded-md text-foreground/50 hover:text-foreground",
                    hasValue || hasFile ? "text-foreground block" : "hidden"
                  )}
                  title="Прикрепить файл">
                  <X size={20} className="" />
                </button>
              )}

              {isAiMode && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "p-1.5 mr-1 rounded-md transition-all text-foreground/50 hover:text-foreground",
                    hasFile
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-200 text-gray-500"
                  )}
                  title="Прикрепить файл">
                  <Paperclip size={18} className="" />
                </button>
              )}
              <input
                type="file"
                name="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />

              <button
                title="Найти"
                type="submit"
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  hasValue || hasFile
                    ? "bg-white/80 hover:bg-white text-primary"
                    : "bg-none text-foreground/50",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}>
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
