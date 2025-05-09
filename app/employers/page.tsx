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

export default function EmployersPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    setStudents(mockStudents);
  }, []);

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
          />
        </div>
        <div className="flex-1">
          {/* <Categories className="mb-8" /> */}

          {/* <div className="mb-5">
            <div className="flex gap-4">
              <Select defaultValue="light">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">20 профилей</SelectItem>
                  <SelectItem value="dark">30 профилей</SelectItem>
                  <SelectItem value="system">50 профилей</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div> */}

          <div className="flex flex-col">
            <div className="grid gap-6">
              {students.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}

              {/* <StudentCard id={"1"} />
              <StudentCard id={"2"} />
              <StudentCard id={"3"} />
              <StudentCard id={"4"} /> */}

              {students.length > 0 && (
                <Pagination className="mt-4">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
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
