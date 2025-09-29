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

enum ArtistType {
  isPerformer = "is_performer",
  isComposer = "is_composer",
  isPrimary = "is_primary",
}

enum SearchParams {
  search = "search",
  letter = "letter",
  includeImage = "include_image",
  type = "type",
  perPage = "per_page",
  page = "page",
}
export { ArtistType, SearchParams };
export type { ArtistsResponse, Artist };
