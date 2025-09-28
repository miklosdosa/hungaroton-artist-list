"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const ABC_REGEX = /^[a-zA-ZáÁéÉíÍóÓöÖőŐúÚüÜűŰ]+$/;

const useReplaceParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const replaceParam = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, encodeURI(value));
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return {
    searchParams,
    replaceParam,
  };
};

export { useReplaceParams, ABC_REGEX };
