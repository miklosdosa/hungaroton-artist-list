"use client";
import { useArtists } from "@/api/hooks";
import { CustomList } from "@/components/CustomList/CustomList";

const Artists = () => {
  const { data, error, isLoading } = useArtists();

  if (error || isLoading) {
    return null;
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
