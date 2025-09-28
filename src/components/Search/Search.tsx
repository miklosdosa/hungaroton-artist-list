"use client";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack, TextField } from "@mui/material";
import { useRef } from "react";

import { SearchParams } from "@/lib/definitions";
import { useReplaceParams } from "@/lib/utils";

const Search = () => {
  const { searchParams, replaceParam } = useReplaceParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const term = inputRef.current?.value;
    replaceParam(SearchParams.search, term);
  };

  return (
    <Stack direction="row" spacing={2} width={{ xs: "100%", sm: "auto" }}>
      <TextField
        variant="standard"
        size="small"
        label="Search"
        inputRef={inputRef}
        fullWidth
        defaultValue={decodeURI(
          searchParams.get(SearchParams.search)?.toString() || ""
        )}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        onClick={handleSearch}
        color="primary"
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export { Search };
