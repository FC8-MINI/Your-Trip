import CartPage from "@/components/Cart/CartPage/CartPage";

interface CartProps {
  searchParams: {
    page?: string;
  };
}

const Cart = ({ searchParams: { page } }: CartProps) => {
  return <CartPage page={Number(page) || 1} />;
};

export default Cart;
