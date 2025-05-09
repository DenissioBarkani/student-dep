"use client";
import {
  // Categories,
  Container,
  Filters,
  StudentCard,
  Title,
} from "@/components/shared";
import { Student } from "@/components/shared/employers/student-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { employersFilters } from "@/data/filters";
import { mockStudents } from "@/data/mockData";
import { useEffect, useState } from "react";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

const ITEMS_PER_PAGE = 5;

export default function EmployersPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    setStudents(mockStudents);
  }, []);

  const handlePageChange = (newPage: number) => {
    if (
      newPage >= 1 &&
      newPage <= Math.ceil(filteredStudents.length / ITEMS_PER_PAGE)
    ) {
      setPage(newPage);
    }
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
    // Reset to first page when filters change
    setPage(1);
  };

  const selectedFiltersExample = [
    { id: 1, text: "IT" },
    { id: 2, text: "BIM" },
    { id: 3, text: "50 000 ₽" },
    { id: 4, text: "100 000 ₽" },
    { id: 5, text: "150 000 ₽" },
    { id: 6, text: "200 000 ₽" },
    { id: 7, text: "250 000 ₽" },
    { id: 8, text: "300 000 ₽" },
    { id: 9, text: "350 000 ₽" },
    { id: 10, text: "400 000 ₽" },
    { id: 11, text: "450 000 ₽" },
    { id: 12, text: "500 000 ₽" },
    { id: 13, text: "550 000 ₽" },
    { id: 14, text: "600 000 ₽" },
    { id: 15, text: "650 000 ₽" },
    { id: 16, text: "700 000 ₽" },
    { id: 17, text: "750 000 ₽" },
    { id: 18, text: "800 000 ₽" },
    { id: 19, text: "850 000 ₽" },
    { id: 20, text: "900 000 ₽" },
    { id: 21, text: "950 000 ₽" },
    { id: 22, text: "1 000 000 ₽" },
  ];

  // Filter students based on active filters
  const filteredStudents = students.filter((student) => {
    if (activeFilters.length === 0) return true;

    // Check if student's desired positions match any active filter
    return student.desiredPositions.some((position) =>
      activeFilters.some((filter) =>
        position.toLowerCase().includes(filter.toLowerCase())
      )
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStudents = filteredStudents.slice(startIndex, endIndex);

  return (
    <Container className="mt-10">
      <div className=" mb-8">
        <Title
          text="Найдите талантливых студентов для вашей компании"
          size="lg"
          className="font-extrabold mb-4"
        />
      </div>

      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters
            sections={employersFilters}
            selectedFilters={selectedFiltersExample}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="flex-1">


          <div className="flex flex-col">
            <div className="grid gap-6">
              {currentStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}

              {filteredStudents.length > 0 && (
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page - 1);
                        }}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(1);
                        }}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    {page > 2 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    {page > 1 && page < totalPages && (
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    {page < totalPages - 1 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    {totalPages > 1 && (
                      <PaginationItem>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(totalPages);
                          }}>
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
