import Pagination from "@/components/Pagination";
import Reservation from "@/components/Reservation";
import ReservationEmpty from "@/components/Reservation/ReservationEmpty";

interface ReservationProps {
  searchParams: {
    page?: string;
  };
}

const ReservationPage = async ({ searchParams: { page } }: ReservationProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { body } = await response.json();

  return (
    <>
      {body.content.length > 0 ? (
        <>
          <Reservation reservationItems={body.content} />
          <Pagination maxPage={body.totalPages} nowPage={Number(page) || 1} />
        </>
      ) : (
        <ReservationEmpty />
      )}
    </>
  );
};

export default ReservationPage;
