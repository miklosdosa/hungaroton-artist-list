import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

import { Item } from "./definitions";

const CustomListItem = ({ title, image, properyLabels }: Item) => (
  <Paper sx={{ display: "flex", height: "-webkit-fill-available" }}>
    <Stack flexGrow={1} flexDirection={{ xs: "row", sm: "column" }}>
      <Box
        sx={{
          position: "relative",
          width: { xs: "150px", sm: "150px" },
          height: { xs: "150px", sm: "150px" },
        }}
      >
        <Image src={image.src} fill={true} alt={image.alt} />
      </Box>

      <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
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
