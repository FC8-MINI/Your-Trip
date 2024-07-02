import ReservationDetail from "@/components/Reservation/ReservationDetail";

const ReservationDatailPage = async ({ params: { reservationId } }: { params: { reservationId: string } }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${reservationId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { body: data } = await response.json();

  return (
    <ReservationDetail
      accomodationName={data.accomodationName}
      userName={data.userName}
      roomName={data.roomName}
      checkIn={data.checkIn}
      checkOut={data.checkOut}
      baseGuests={data.baseGuests}
      extraPrice={data.extraPrice}
      parkingAvailable={data.parkingAvailable}
      cookingAvailable={data.cookingAvailable}
      roomPrice={data.roomPrice}
    />
  );
};

export default ReservationDatailPage;
