"use client";

import { Paper } from "@mui/material";

import { useArtists } from "@/api/hooks";
import { LinkPagination } from "@/components/LinkPagination/LinkPagination";

const Pagination = () => {
  const { data } = useArtists();

  return (
    <Paper>
      <LinkPagination count={data?.pagination.total_pages} />
    </Paper>
  );
};

export { Pagination };
