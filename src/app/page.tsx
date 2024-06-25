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
  const { body: data } = await response.json();

  return (
    <>
      <HeroSection />
      <Category category={category} />
      <AccomodationList category={category} totalElements={data.totalElements} accomodationItems={data.content} />
      <Pagination maxPage={data.totalPages} nowPage={Number(page) || 1} category={category} />
    </>
  );
}
