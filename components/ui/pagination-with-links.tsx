"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface PaginationWithLinksProps {
  totalItems: number;
  pageSizeSelectOptions?: {
    pageSizeSearchParam: string;
    options: { value: string; label: string }[];
  };
}

/**
 * Navigate with Nextjs links (need to update your own `pagination.tsx` to use Nextjs Link)
 * 
 * @example
 * ```
 * <PaginationWithLinks
    page={1}
    pageSize={20}
    totalCount={500}
  />
 * ```
 */
export function PaginationWithLinks({
  totalItems,
  pageSizeSelectOptions,
}: PaginationWithLinksProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageSearchParam = "page";
  const currentPage = Number(searchParams.get(pageSearchParam)) || 1;
  const pageSize =
    Number(
      searchParams.get(pageSizeSelectOptions?.pageSizeSearchParam || "pageSize")
    ) || 10;

  const totalPages = Math.ceil(totalItems / pageSize);

  const createPageURL = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set(pageSearchParam, pageNumber.toString());
      return `?${params.toString()}`;
    },
    [searchParams, pageSearchParam]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        router.push(createPageURL(newPage));
      }
    },
    [createPageURL, router, totalPages]
  );

  const handlePageSizeChange = useCallback(
    (newPageSize: string) => {
      const params = new URLSearchParams(searchParams);
      if (pageSizeSelectOptions?.pageSizeSearchParam) {
        params.set(pageSizeSelectOptions.pageSizeSearchParam, newPageSize);
      }
      params.set(pageSearchParam, "1"); // Reset to first page when changing page size
      router.push(`?${params.toString()}`);
    },
    [searchParams, router, pageSizeSelectOptions?.pageSizeSearchParam]
  );

  const renderPageNumbers = () => {
    const items: React.ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageURL(i)}
              isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href={createPageURL(1)} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={createPageURL(i)}
              isActive={currentPage === i}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={createPageURL(totalPages)}
            isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {pageSizeSelectOptions && (
            <>
              <span className="text-sm text-gray-500">Показывать по:</span>
              <Select
                value={pageSize.toString()}
                onValueChange={handlePageSizeChange}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pageSizeSelectOptions.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
        </div>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
