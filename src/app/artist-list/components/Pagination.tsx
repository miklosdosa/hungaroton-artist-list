"use client";

import { Paper } from "@mui/material";
import { useSearchParams } from "next/navigation";

import { useArtists } from "@/api/hooks";
import { LinkPagination } from "@/components/LinkPagination/LinkPagination";

const Pagination = () => {
  const searchParams = useSearchParams();
  const { data } = useArtists(
    new URLSearchParams({ search: searchParams.get("search") || "" })
  );

  return (
    <Paper>
      <LinkPagination count={data?.pagination.total_pages} />
    </Paper>
  );
};

export { Pagination };
