import PayInfo from "@/components/Pay/PayInfo";
import PayTerms from "@/components/Pay/PayTerms";

interface PayPageProps {
  searchParams: {
    reservationId?: string;
    accommodationName: string;
    roomId: string;
    roomName: string;
    peopleNumber: string;
    totalPrice: string;
    checkIn: string;
    checkOut: string;
    imageUrl: string;
  };
}

const PayPage = ({ searchParams }: PayPageProps) => {
  return (
    <>
      <PayInfo {...searchParams} />
      <PayTerms {...searchParams} />
    </>
  );
};

export default PayPage;
