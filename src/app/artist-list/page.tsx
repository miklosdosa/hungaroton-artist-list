import { Box, Stack } from "@mui/material";
import { Suspense } from "react";

import { Artists } from "./components/Artists";
import { FilterBar } from "./components/FilterBar";
import { Pagination } from "./components/Pagination";

const Page = () => (
  <Suspense>
    <FilterBar />
    <Stack justifyContent="space-between" flexGrow={1}>
      <Artists />
      <Box
        position="sticky"
        bottom="24px"
        width="max-content"
        marginLeft="auto"
        marginRight="auto"
        marginTop={6}
      >
        <Pagination />
      </Box>
    </Stack>
  </Suspense>
);

export default Page;
