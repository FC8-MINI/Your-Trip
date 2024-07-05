export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getAccommodationList } from "@/apis/accommodation/getAccommodationList";
import AccomodationEmpty from "@/components/Accomodation/AccomodationEmpty";
import AccomodationList from "@/components/Accomodation/AccomodationList";
import Category from "@/components/Category";
import { type CategoryType } from "@/components/Category/Category.types";
import HeroSection from "@/components/HeroSection";
import Pagination from "@/components/Pagination";

interface HomeProps {
  searchParams: {
    name?: string;
    category?: CategoryType;
    page?: string;
    checkIn?: string;
    checkOut?: string;
  };
}

export default async function Home({ searchParams: { name, category, checkIn, checkOut, page } }: HomeProps) {
  const [error, data] = await getAccommodationList({ name, category, checkIn, checkOut, page: Number(page) });
  return (
    <>
      <HeroSection />
      <Category category={category} />
      {error ? (
        <AccomodationEmpty message={error.result.resultDescription} />
      ) : (
        <>
          <AccomodationList
            isMain={!name && !checkIn && !checkOut}
            totalElements={data.body.totalElements}
            accomodationItems={data.body.content}
          />
          <Pagination maxPage={data.body.totalPages} nowPage={Number(page) || 1} />
        </>
      )}
    </>
  );
}
