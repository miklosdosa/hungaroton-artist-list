"use client";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack, TextField } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const term = inputRef.current?.value;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", encodeURI(term));
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack direction="row" spacing={2} width={{ xs: "100%", sm: "auto" }}>
      <TextField
        variant="standard"
        size="small"
        label="Search"
        inputRef={inputRef}
        fullWidth
        defaultValue={decodeURI(searchParams.get("search")?.toString() || "")}
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
