import { Grid } from "@mui/material";

import { CustomListItem } from "./CustomListItem";
import { Item } from "./definitions";

type StackListProps = {
  items: Item[];
};

const CustomList = ({ items }: StackListProps) => (
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid key={item.id} width={{ sm: 150, xs: "100%" }} alignItems="stretch">
        <CustomListItem
          id={item.id}
          image={item.image}
          title={item.title}
          properyLabels={item.properyLabels}
        />
      </Grid>
    ))}
  </Grid>
);

export { CustomList };
