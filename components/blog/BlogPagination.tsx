import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function BlogPagination({ currentPage, totalPages, baseUrl }: BlogPaginationProps) {
  const getPageUrl = (page: number) => {
    return `${baseUrl}?page=${page}`;
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination className="mt-16 pt-12 border-t border-rule">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getPageUrl(currentPage - 1)} />
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          
          // Logic to show a few pages around current page and ellipses
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={getPageUrl(pageNum)}
                  isActive={currentPage === pageNum}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (
            pageNum === currentPage - 2 ||
            pageNum === currentPage + 2
          ) {
            return (
              <PaginationItem key={pageNum}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return null;
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={getPageUrl(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
