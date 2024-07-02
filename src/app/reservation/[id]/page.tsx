import ReservationDetail from "@/components/Reservation/ReservationDetail";

const ReservationDatailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/${id}`;
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
      checkIn={data.checkIn}
      checkOut={data.checkOut}
      roomName={data.roomName}
      extraPrice={data.extraPrice}
      roomPrice={data.roomPrice}
      parkingAvailable={data.parkingAvailable}
      cookingAvailable={data.cookingAvailable}
    />
  );
};

export default ReservationDatailPage;
