"use client";

import { useState, useEffect } from "react";
import { CartContainer, CartTitle } from "./CartPage.styles";
import CartList from "../CartList";
import { CartPageProps, APIResponse } from "./CartPage.types";
import { Cart } from "../CartItem/CartItem.types";

const defaultInitialItems: Cart[] = [
  {
    roomId: 1,
    imageUrl: "https://via.placeholder.com/150",
    accommodationName: "스탠포드 호텔 제주",
    // address: "제주특별자치도 서귀포시",
    checkIn: "2024-06-17T15:00",
    checkOut: "2024-06-18T11:00",
    roomName: "스위트",
    peopleNumber: 4,
    totalPrice: 240000,
  },
  {
    roomId: 2,
    imageUrl: "https://via.placeholder.com/150",
    accommodationName: "제주 T무인텔",
    // address: "제주특별자치도 제주시",
    checkIn: "2024-06-17T21:30",
    checkOut: "2024-06-18T00:00",
    roomName: "스탠다드",
    peopleNumber: 2,
    totalPrice: 40000,
  },
];

const defaultRoomNames = ["스위트", "스탠다드"];

const CartPage = ({
  initialItems = defaultInitialItems, // 기본값 설정
  roomNames = defaultRoomNames, // 기본값 설정
}: CartPageProps) => {
  const [cartList, setCartList] = useState<Cart[] | null>(null);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       const response = await fetch("https://api.miniteam2.store/api/cart", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //         cache: "no-store",
  //         body: JSON.stringify({
  //           roomId: 1,
  //           peopleNumber: 5,
  //           checkIn: "2024-07-05T14:00:00",
  //           checkOut: "2024-07-06T14:00:00",
  //         }),
  //       });
  //       const data: APIResponse = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Fetch error: ", error);
  //     }
  //   };
  //   fetchCart()
  //     .then(() => {
  //       console.log("Fetch completed");
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error: ", error);
  //     });
  // }, []);

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
        console.log("cartList", data.body.content);

        setCartList(data.body.content);
        console.log("Fetch completed"); // fetch 완료 시 처리할 코드
      } catch (error) {
        console.error("Fetch error: ", error); // 에러 발생 시 처리할 코드
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
      <CartList items={cartList ?? initialItems} roomNames={roomNames} />
    </CartContainer>
  );
};

export default CartPage;
