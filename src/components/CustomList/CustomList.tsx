import { Alert, Grid } from "@mui/material";

import { CustomListItem } from "./CustomListItem";
import { Item } from "./definitions";

type StackListProps = {
  items: Item[];
};

const CustomList = ({ items }: StackListProps) => {
  if (items.length === 0) {
    return (
      <Alert
        variant="outlined"
        severity="info"
        sx={{ width: "max-content", marginLeft: "auto", marginRight: "auto" }}
      >
        No items to show
      </Alert>
    );
  }
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid
          key={item.id}
          width={{ sm: 150, xs: "100%" }}
          alignItems="stretch"
        >
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
};

export { CustomList };
