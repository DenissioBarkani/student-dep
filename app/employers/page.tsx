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
import { staticStudents } from "@/data/static-data";
import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

export default function EmployersPage() {
  const [students] = useState<Student[]>(staticStudents);

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
          <Filters sections={employersFilters} />
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
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
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
