"use client";

import { Paper, Skeleton } from "@mui/material";
import { useSearchParams } from "next/navigation";

import { useArtists } from "@/api/hooks";
import { LinkPagination } from "@/components/LinkPagination/LinkPagination";
import { SearchParams } from "@/lib/definitions";

const Pagination = () => {
  const searchParams = useSearchParams();
  const { data, error } = useArtists(
    new URLSearchParams({
      [SearchParams.search]: searchParams.get(SearchParams.search) || "",
      [SearchParams.includeImage]:
        searchParams.get(SearchParams.includeImage) || "",
      [SearchParams.letter]: searchParams.get(SearchParams.letter) || "",
      [SearchParams.type]: searchParams.get(SearchParams.type) || "",
    })
  );

  if (error) {
    return <Skeleton variant="rectangular" width={200} height={32} />;
  }

  if (data?.pagination && data.pagination.total_pages < 2) {
    return null;
  }

  return (
    <Paper>
      <LinkPagination count={data?.pagination.total_pages} />
    </Paper>
  );
};

export { Pagination };
