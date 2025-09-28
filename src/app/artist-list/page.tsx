import { AppBar, Box, Stack, Toolbar } from "@mui/material";

import { Search } from "@/components/Search/Search";

import { Artists } from "./components/Artists";
import { Pagination } from "./components/Pagination";

const Page = () => {
  return (
    <Stack minHeight="100vh" justifyContent="space-between">
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Search />
        </Toolbar>
      </AppBar>
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
  );
};

export default Page;
