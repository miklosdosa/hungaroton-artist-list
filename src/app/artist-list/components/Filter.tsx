"use client";

import { ArtistType, SearchParams } from "@/lib/definitions";
import { ABC_REGEX, useReplaceParams } from "@/lib/utils";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  NativeSelect,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const Filter = () => {
  const { searchParams, replaceParam } = useReplaceParams();

  const includeImageParam = searchParams.get(SearchParams.includeImage);
  const typeParam = searchParams.get(SearchParams.type);
  const letterParam = searchParams.get(SearchParams.letter);

  const [includeImage, setIncludeImage] = useState(
    !includeImageParam || includeImageParam === "true"
  );

  const type =
    typeParam && Object.values(ArtistType).includes(typeParam as ArtistType)
      ? typeParam
      : "";

  const letter = decodeURI(letterParam ?? "");

  const handleCheckboxChange = (
    _: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    replaceParam(SearchParams.includeImage, checked ? "true" : "false");
    setIncludeImage(checked);
  };

  const handleTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    replaceParam(SearchParams.letter, e.target.value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    replaceParam(SearchParams.type, e.target.value);
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} p={2} spacing={2}>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={includeImage}
            onChange={handleCheckboxChange}
          />
        }
        label="Include image"
      />
      <Stack direction="row" spacing={2}>
        <TextField
          defaultValue={letter}
          variant="standard"
          label="Letter"
          onKeyDown={(event) => {
            if (!ABC_REGEX.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={handleTextFieldChange}
          slotProps={{
            htmlInput: {
              maxLength: 1,
            },
          }}
          sx={{ width: "60px" }}
        />

        <FormControl>
          <InputLabel variant="standard">Type</InputLabel>
          <NativeSelect defaultValue={type} onChange={handleSelectChange}>
            <option value=""></option>
            <option value={ArtistType.isComposer}>Composer</option>
            <option value={ArtistType.isPerformer}>Performer</option>
            <option value={ArtistType.isPrimary}>Primary</option>
          </NativeSelect>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export { Filter };
