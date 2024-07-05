"use client";

import { useState, useEffect } from "react";
import { CartContainer, CartTitle } from "./CartPage.styles";
import CartList from "../CartList";
import { APIResponse } from "./CartPage.types";
import { Cart } from "../CartItem/CartItem.types";

const CartPage = () => {
  const [cartList, setCartList] = useState<Cart[]>([]);

  useEffect(() => {
    const fetchCartList = async () => {
      try {
        const response = await fetch("https://api.miniteam2.store/api/cart?page=1&size=10", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });
        const data: APIResponse = await response.json();
        console.log(data);
        console.log("cartList", data.body.content);
        console.log(data.result.resultCode);

        setCartList(data.body.content);
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
  }, []);

  return (
    <CartContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList items={cartList} />
    </CartContainer>
  );
};

export default CartPage;
