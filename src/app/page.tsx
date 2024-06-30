import { getAccommodationList } from "@/apis/getAccommodationList";
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
    checkIn?: string;
    checkOut?: string;
  };
}

export default async function Home({ searchParams: { category, page, checkIn, checkOut } }: HomeProps) {
  const [error, data] = await getAccommodationList();

  return (
    <>
      <HeroSection />
      {error ? (
        <AccomodationEmpty />
      ) : (
        <>
          <Category category={category} />
          <AccomodationList category={category} accomodationItems={data.body.content} />
          <Pagination maxPage={data.body.totalPages} nowPage={Number(page) || 1} category={category} />
        </>
      )}
    </>
  );
}
