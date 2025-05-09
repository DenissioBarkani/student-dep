/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CompanyCard } from "@/components/shared/company-card";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import fetchCompany from "@/lib/api";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Filters, Title } from "@/components/shared";
import { studentsFilters } from "@/data/filters";
import { useCompanyContext } from "@/lib/hooks/CompanyContext";
import { Badge, ChevronDown, SlidersHorizontal, X } from "lucide-react";

function PaginationContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const perPage = parseInt(searchParams.get("pageSize") || "12");
  const { companies, setCompanies, search, setSearch } = useCompanyContext();
  const [paginationData, setPaginationData] = useState({
    pages: 0,
    totalItems: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCompany(currentPage, perPage);
        setCompanies(data.companyData);
        setPaginationData({
          pages: data.pages,
          totalItems: data.items,
        });
        setSearch(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setCompanies([]);
        setSearch(false);
      } finally {
        setLoading(false);
      }
    };
    if (!search) {
      fetchData();
    }
  }, [currentPage, perPage, search, setCompanies, setSearch]);

  const selectedFiltersExample = [
    { type: "checkbox", label: "IT" },
    { type: "checkbox", label: "BIM" },
    { type: "select", label: "Оплата" },
    { type: "select", label: "Берут курс" },
    { type: "select", label: "Уровень зарплаты" },
  ];

  return (
    <>
      <Container className="mt-4 md:mt-10">
        <div className="md:mb-8">
          <Title
            text="Стажировки"
            size="lg"
            className="font-extrabold mb-2 md:mb-4"
          />
        </div>
      </Container>

      <div
        className="block md:hidden relative w-full overflow-x-auto mb-3 pl-4 pr-2"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
        <div className="flex flex-nowrap items-center gap-2 min-w-max">
          <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-foreground font-semibold shadow">
            <SlidersHorizontal size={18} />
            Фильтры
          </button>
          {selectedFiltersExample.map((filter, idx) =>
            filter.type === "checkbox" ? (
              <div
                key={idx}
                className="flex-shrink-0 bg-secondary-foreground/90 text-white rounded-full px-4 py-2 flex items-center gap-1 font-semibold">
                {filter.label}
                <button className="ml-1 hover:text-destructive">
                  <X size={14} />
                </button>
              </div>
            ) : (
              <div
                key={idx}
                className="flex-shrink-0 bg-muted text-foreground rounded-full px-4 py-2 flex items-center gap-1 font-semibold border-none">
                {filter.label}
                <ChevronDown size={14} />
              </div>
            )
          )}
        </div>
      </div>

      <Container>
        <div className="flex gap-15 md:mb-10">
          <Filters sections={studentsFilters} />
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <>
                  {search && (
                    <div className="flex items-end justify-between">
                      <div className="text-muted-foreground">
                        Найдено результатов: {companies.length}
                      </div>
                      <button
                        onClick={() => setSearch(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary-foreground/10 text-secondary-foreground/70 transition-colors"
                        title="Сбросить поиск">
                        <X size={16} />
                        Сбросить поиск
                      </button>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
                    {companies.map((company) => (
                      <CompanyCard
                        key={company.id}
                        id={company.id}
                        name={company.name}
                        imageUrl={company.imageUrl}
                        description={company.description}
                        tags={company.tags}
                        deadline={company.deadline}
                        places={company.places}
                      />
                    ))}
                  </div>
                </>
              )}

              {!search && paginationData.pages > 1 && (
                <PaginationWithLinks
                  totalItems={paginationData.totalItems}
                  pageSizeSelectOptions={{
                    pageSizeSearchParam: "pageSize",
                    options: [
                      { value: "9", label: "9" },
                      { value: "12", label: "12" },
                      { value: "15", label: "15" },
                    ],
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }>
      <PaginationContent />
    </Suspense>
  );
}
