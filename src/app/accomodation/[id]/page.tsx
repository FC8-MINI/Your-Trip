import AccomodationDetail from "@/components/Accomodation/AccomodationDetail";

const Accomodation = async ({ params: { id } }: { params: { id: string } }) => {
  const url = `https://api.miniteam2.store/api/accommodation/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-store",
  });
  const { body: data } = await response.json();

  return <AccomodationDetail accomodationDetail={data.accomodation} accomodationRoomItems={data.rooms} />;
};

export default Accomodation;
