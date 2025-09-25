type ArtistsResponse = {
  data: Artist[];
  pagination: {
    currentPage: number;
    total_pages: number;
    per_page: number;
    total_items: number;
  };
};

type Artist = {
  id: number;
  name: string;
  albumCount: number;
  portrait: string;
};

export type { ArtistsResponse, Artist };
