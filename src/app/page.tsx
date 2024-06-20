import AccomodationList from "@/components/Accomodation/AccomodationList";
import Category from "@/components/Category";
import { type CategoryType } from "@/components/Category/Category.types";
import HeroSection from "@/components/HeroSection";

interface HomeProps {
  searchParams: {
    category?: CategoryType;
  };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <HeroSection />
      <Category category={searchParams.category} />
      <AccomodationList />
    </>
  );
}
