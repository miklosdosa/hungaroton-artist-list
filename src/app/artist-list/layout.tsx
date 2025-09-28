import { AppBar, Stack, Toolbar } from "@mui/material";

import { Search } from "@/components/Search/Search";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Stack minHeight="100vh" spacing={2}>
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Search />
      </Toolbar>
    </AppBar>
    {children}
  </Stack>
);

export default Layout;
