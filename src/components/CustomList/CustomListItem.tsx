import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

import theme from "@/theme";

import { Item } from "./definitions";

const CustomListItem = ({ title, image, properyLabels }: Item) => (
  <Paper sx={{ height: "100%" }}>
    <Stack height={"100%"} flexDirection={{ xs: "row", sm: "column" }}>
      <Box
        sx={{
          position: "relative",
          minWidth: "150px",
          width: { xs: "150px", sm: "150px" },
          height: { xs: "150px", sm: "150px" },
        }}
      >
        <Image
          src={image.src}
          fill={true}
          alt={image.alt}
          sizes={`(max-width: ${theme.breakpoints.values.sm}px) 150px`}
        />
      </Box>

      <Stack spacing={2} flexGrow={1} justifyContent="space-between" p={1}>
        <Typography variant="subtitle1" component="p">
          {title}
        </Typography>
        <Stack direction="row">
          {properyLabels.map((label, i) => (
            <Chip variant="outlined" key={i} label={label} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  </Paper>
);

export { CustomListItem };
