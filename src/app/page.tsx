import AccomodationEmpty from "@/components/Accomodation/AccomodationEmpty";
import AccomodationList from "@/components/Accomodation/AccomodationList";
import Category from "@/components/Category";
import { type CategoryType } from "@/components/Category/Category.types";
import HeroSection from "@/components/HeroSection";
import Pagination from "@/components/Pagination";

interface HomeProps {
  searchParams: {
    category?: CategoryType;
    page?: string;
  };
}

export default async function Home({ searchParams: { category, page } }: HomeProps) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/accomodation${category ? "/category?region=category_name" : ""}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { result, body } = await response.json();

  return (
    <>
      <HeroSection />
      {result.resultCode === "OK" ? (
        <>
          <Category category={category} />
          <AccomodationList category={category} accomodationItems={body.content} />
          <Pagination maxPage={body.totalPages} nowPage={Number(page) || 1} category={category} />
        </>
      ) : (
        <AccomodationEmpty />
      )}
    </>
  );
}
