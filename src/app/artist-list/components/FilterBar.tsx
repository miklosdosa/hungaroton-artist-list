"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  AppBar,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

import { Search } from "@/components/Search/Search";

import { Filter } from "./Filter";

const FilterBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Stack justifyContent="space-between" direction="row" flexGrow={1}>
          <Search />
          <IconButton color="inherit" onClick={toggleDrawer}>
            <FilterAltIcon />
          </IconButton>
        </Stack>
      </Toolbar>
      <Collapse in={open}>
        <Divider />
        <Filter />
      </Collapse>
    </AppBar>
  );
};

export { FilterBar };
