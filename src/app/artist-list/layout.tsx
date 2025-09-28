import { Stack } from "@mui/material";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <Stack minHeight="100vh" spacing={2}>
    {children}
  </Stack>
);

export default Layout;
