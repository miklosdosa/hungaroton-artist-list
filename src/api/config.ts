import { SearchParams } from "@/lib/definitions";

const PARAM_CONF = {
  artists: {
    available: [
      SearchParams.page,
      SearchParams.perPage,
      SearchParams.includeImage,
      SearchParams.search,
      SearchParams.type,
      SearchParams.letter,
    ],
    default: {
      [SearchParams.includeImage]: "true",
      [SearchParams.perPage]: "50",
    },
  },
};

export { PARAM_CONF };
