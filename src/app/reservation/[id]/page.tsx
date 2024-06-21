"use client";

import { reservations } from "@/components/Reservation/Reservation";
import ReservationDetail from "@/components/Reservation/ReservationDetail";
import { notFound } from "next/navigation";

const ReservationDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const reservation = reservations.find((res) => res.id === parseInt(id, 10));

  if (!reservation) {
    notFound();
  }

  return <ReservationDetail params={params} />;
};

export default ReservationDetailPage;
