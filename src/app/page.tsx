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

export default function Home({ searchParams: { category, page } }: HomeProps) {
  return (
    <>
      <HeroSection />
      <Category category={category} />
      <AccomodationList />
      <Pagination maxPage={20} nowPage={Number(page) || 1} category={category} />
    </>
  );
}
