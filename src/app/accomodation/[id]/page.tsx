import AccomodationDetail from "@/components/Accomodation/AccomodationDetail";

const Accomodation = async ({ params: { id } }: { params: { id: string } }) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/accommodation/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { body: data } = await response.json();

  return <AccomodationDetail accomodationDetail={data.accomodation} accomodationRoomItems={data.rooms} />;
};

export default Accomodation;
