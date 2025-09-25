import { CustomList } from "@/components/CustomList/CustomList";
import { artists } from "@/lib/dummy-data";

const Artists = () => {
  const data = artists;

  return (
    <CustomList
      items={data.map((item) => ({
        id: item.id,
        title: item.name,
        image: { src: item.portrait, alt: item.name },
        properyLabels: [`Album Count: ${item.albumCount}`],
      }))}
    />
  );
};

export { Artists };
