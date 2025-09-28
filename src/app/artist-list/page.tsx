import { Box, Stack } from "@mui/material";

import { Artists } from "./components/Artists";
import { Pagination } from "./components/Pagination";

const Page = () => (
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
);

export default Page;
