"use client";

import Link from "next/link";
import { useMemo } from "react";
import { PaginationProps } from "./Pagination.types";
import { PaginationContainer, PaginationItem } from "./Pagination.styles";
import { usePathnameWithoutPage } from "@/hooks/usePathnameWithoutPage";

const Pagination = ({ maxPage, nowPage }: PaginationProps) => {
  const baseUrl = usePathnameWithoutPage();

  const pages = useMemo(() => {
    const pages: (number | string)[] = [];
    const startPage = Math.max(nowPage - 2, 1);
    const endPage = Math.min(nowPage + 2, maxPage);

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < maxPage) {
      if (endPage < maxPage - 1) {
        pages.push("...");
      }
      pages.push(maxPage);
    }

    return pages;
  }, [nowPage, maxPage]);

  return (
    <PaginationContainer>
      {nowPage > 1 && (
        <PaginationItem>
          <Link href={`${baseUrl}page=${nowPage - 1}`}>{"<"}</Link>
        </PaginationItem>
      )}
      {pages.map((page) => {
        if (typeof page === "number") {
          return (
            <PaginationItem key={page} $isActive={page === nowPage} $isLink={true}>
              <Link href={`${baseUrl}page=${page}`}>{page}</Link>
            </PaginationItem>
          );
        } else {
          return (
            <PaginationItem key={page} $isActive={false} $isLink={false}>
              {page}
            </PaginationItem>
          );
        }
      })}
      {nowPage < maxPage && (
        <PaginationItem>
          <Link href={`${baseUrl}page=${nowPage + 1}`}>{">"}</Link>
        </PaginationItem>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
