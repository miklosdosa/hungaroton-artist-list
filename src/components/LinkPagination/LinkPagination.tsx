"use client";

import { Pagination as MUIPagination, PaginationItem } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type LinkPaginationProps = {
  count?: number;
};

const LinkPagination = ({ count }: LinkPaginationProps) => {
  const params = useSearchParams();
  const pathname = usePathname();
  const createPageURL = (pageNumber: number | string | null) => {
    const newParams = new URLSearchParams(params);
    if (pageNumber) {
      newParams.set("page", pageNumber.toString());
    }

    return `${pathname}?${newParams.toString()}`;
  };

  return (
    <MUIPagination
      page={parseInt(params.get("page") || "1", 10)}
      count={count}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={createPageURL(item.page)}
          {...item}
        />
      )}
    />
  );
};

export { LinkPagination };
