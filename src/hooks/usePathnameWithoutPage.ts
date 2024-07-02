import { usePathname, useSearchParams } from "next/navigation";

export const usePathnameWithoutPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.delete("page");

  const pathnameWithoutPage = pathname + `${params.size > 0 ? `?${decodeURIComponent(params.toString())}&` : "?"}`;

  return pathnameWithoutPage;
};
