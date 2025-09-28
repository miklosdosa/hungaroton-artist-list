import { Grid, Skeleton } from "@mui/material";

type CustomListSkeletonProps = {
  items?: number;
};

const CustomListSkeleton = ({ items }: CustomListSkeletonProps) => (
  <Grid container spacing={2}>
    {Array.from({ length: items || 50 }, (_, i) => i + 1).map((i) => (
      <Grid key={i} width={{ sm: 150, xs: "100%" }} height={{ sm: 250 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Grid>
    ))}
  </Grid>
);

export { CustomListSkeleton };
