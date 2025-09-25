type Item = {
  id: string | number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  properyLabels: string[];
};

export type { Item };
