"use client";

import { Alert } from "@mui/material";
import { useSearchParams } from "next/navigation";

import { useArtists } from "@/api/hooks";
import { CustomList } from "@/components/CustomList/CustomList";
import { CustomListSkeleton } from "@/components/CustomList/CustomListSkeleton";

const Artists = () => {
  const params = useSearchParams();
  const { data, error, isLoading } = useArtists(params);

  if (isLoading) {
    return (
      <CustomListSkeleton
        items={parseInt(params.get("per_page") || "50", 10)}
      />
    );
  }

  if (error) {
    return (
      <Alert
        variant="outlined"
        severity="error"
        sx={{ width: "max-content", marginLeft: "auto", marginRight: "auto" }}
      >
        Something went wrong. Refetch in progress...
      </Alert>
    );
  }

  return (
    <CustomList
      items={
        data?.data.map((item) => ({
          id: item.id,
          title: item.name,
          image: { src: item.portrait, alt: item.name },
          properyLabels: [`Album Count: ${item.albumCount}`],
        })) || []
      }
    />
  );
};

export { Artists };
