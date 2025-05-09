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

  const { setCompanies,setSearch } = useCompanyContext();

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
    // formData.append("file", file );

    const searchText = formData.get("search") as string;
    console.log("Строка", searchText);
    const file = formData.get("file") as File | null;
    console.log(e.currentTarget);
    console.log(formData);
    const hasValidFile = file && file.size > 0;
    console.log("Условие строки", !!searchText?.trim());
    console.log("Условие файла", file);
    if (!searchText?.trim() && !hasValidFile) {
      alert("Введите данные или прикрепите файл");
      return;
    }

    try {
      setIsLoading(true);

      if (isAiMode) {
        const submitData = new FormData();
        if (searchText?.trim()) {
          submitData.append("text", searchText);
        }
        if (file) {
          submitData.append("file", file);
        }
        const res = await fetch("http://localhost:3100/upload", {
          method: "POST",
          body: submitData,
        });

        if (!res.ok) {
          throw new Error("Ошибка при отправке формы");
        }

        const data = await res.json();
        console.log("Файл загружен:", data.companies);
        // -----
        setCompanies(data.companies);
        setSearch(true)
      } else {
        if (searchText?.trim()) {
          const submitData = new FormData();
          submitData.append("text", searchText);

          const res = await fetch("http://localhost:3100/upload", {
            method: "POST",
            body: submitData,
          });

          if (!res.ok) {
            throw new Error("Ошибка при поиске");
          }

          const data = await res.json();
          console.log("Результаты поиска:", data.companies);
          setCompanies(data.companies);
          setSearch(true)
        }
      }

      if (formRef.current) {
        formRef.current.reset();
        setHasFile(false);
        setHasValue("");
      }
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
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
