import { usePathname, useSearchParams } from "next/navigation";

export const usePathnameWithoutQuerys = (querys: string[]) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  querys.map((query) => {
    params.delete(query);
  });

  const pathnameWithoutQuerys = pathname + `${params.size > 0 ? `?${decodeURIComponent(params.toString())}&` : "?"}`;

  return pathnameWithoutQuerys;
};
