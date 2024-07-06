"use client";

import { useState, useEffect } from "react";
import { CartContainer, CartTitle } from "./CartPage.styles";
import CartList from "../CartList";
import { APIResponse, CartPageProps } from "./CartPage.types";
import { Cart } from "../CartItem/CartItem.types";
import Pagination from "@/components/Pagination";

const CartPage = ({ page }: CartPageProps) => {
  const [maxPage, setMaxPage] = useState(1);
  const [cartList, setCartList] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchCartList = async () => {
      try {
        const response = await fetch(`https://api.miniteam2.store/api/cart?page=${page}&size=10`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });
        const data: APIResponse = await response.json();

        setCartList(data.body.content);
        setMaxPage(data.body.totalPages);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchCartList()
      .then(() => {
        console.log("Fetch completed");
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, [page]);

  return (
    <CartContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList items={cartList} />
      {cartList && <Pagination nowPage={page} maxPage={maxPage} />}
    </CartContainer>
  );
};

export default CartPage;
