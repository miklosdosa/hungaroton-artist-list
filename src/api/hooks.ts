"use client";
import useSWR from "swr";

import { ArtistsResponse } from "@/lib/definitions";

const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args);
  if (!res.ok) throw new Error("Fetch error");
  return res.json();
};

const useArtists = () => {
  const { data, error, isLoading } = useSWR<ArtistsResponse>(
    `https://exam.api.fotex.net/api/artists?include_image=true&page=1&per_page=50`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
};

export { useArtists };
