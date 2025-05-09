/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CompanyCard, CompanyProps } from "@/components/shared/company-card";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import fetchCompany from "@/lib/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Categories, Container, Filters, Title } from "@/components/shared";
import { studentsFilters } from "@/data/filters";
import { useCompanyContext } from "@/lib/hooks/CompanyContext";
import { Suspense } from "react";
import { Badge, ChevronDown, SlidersHorizontal, X } from "lucide-react";

interface PaginationData {
  pages: number;
  totalItems: number;
}

function CompaniesList() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 6;
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCompany(page, pageSize);
        setCompanies(data.companyData);
        setTotalCount(data.items);
      } catch (error) {
        console.error("Error loading companies:", error);
        setCompanies([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </div>
  );
}

function SearchResults() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const perPage = 12;
  const { companies, setCompanies, search, setSearch } = useCompanyContext();
  const [paginationData, setPaginationData] = useState<PaginationData>({
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
  }, [currentPage, search, setCompanies, setSearch]);

  if (loading) {
    return <div className="h-screen">loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
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
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
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
      {!search && paginationData && paginationData.pages > 1 && (
        <PaginationWithLinks
          page={currentPage}
          pageSize={perPage}
          totalCount={paginationData.totalItems}
        />
      )}
    </div>
  );
}

export default function Home() {
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
            <Suspense fallback={<div>Loading...</div>}>
              <SearchResults />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  );
}
