"use client";
import useSWR from "swr";

import { ArtistsResponse } from "@/lib/definitions";

import { PARAM_CONF } from "./config";

const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args);
  if (!res.ok) throw new Error("Fetch error");
  return res.json();
};

const getQueryString = (
  params: [string, string][],
  availableParams: string[],
  defaultParams: { [key: string]: string }
) => {
  const filteredParams = [...params].filter(
    (v) => availableParams.includes(v[0]) && v[1] !== ""
  );
  const checked = [...filteredParams];
  for (const entry of Object.entries(defaultParams)) {
    if (
      filteredParams.length === 0 ||
      !filteredParams.find((v) => v[0] === entry[0])
    ) {
      checked.push([entry[0], entry[1]]);
    }
  }
  return checked
    .reduce((prev: string[], curr) => prev.concat(`${curr[0]}=${curr[1]}`), [])
    .join("&");
};

const useArtists = (params?: URLSearchParams | null) => {
  const paramObject = params ? Object.fromEntries(params) : {};
  const paramEntries = params ? Object.entries(paramObject) : [];
  const query = getQueryString(
    paramEntries,
    PARAM_CONF.artists.available,
    PARAM_CONF.artists.default
  );

  console.log(query);
  const { data, error, isLoading } = useSWR<ArtistsResponse>(
    `https://exam.api.fotex.net/api/artists?${query}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
  };
};

export { useArtists };
