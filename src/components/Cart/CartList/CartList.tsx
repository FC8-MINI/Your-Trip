"use client";

import { useState, useEffect, ChangeEvent } from "react";
import CartItem from "../CartItem";
import { CartListProps, DeleteRequestPayload } from "./CartList.types";
import { Cart } from "../CartItem/CartItem.types";
import { ListBox, Wrapper, SelectBox, DeleteButton, ControlContainer, InfoContainer } from "./CartList.styles";

const CartList = ({ items: initialItems }: CartListProps) => {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(new Array(initialItems.length).fill(false));
  const [items, setItems] = useState<Cart[]>(initialItems);

  useEffect(() => {
    setItems(initialItems);
    setSelectedItems(new Array(initialItems.length).fill(false));
  }, [initialItems]);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectedItems(new Array(items.length).fill(isChecked));
  };

  const handleDelete = async () => {
    const selectedReservationIds = items.filter((_, index) => selectedItems[index]).map((cart) => cart.reservationId);

    const payload: DeleteRequestPayload = { reservationIds: selectedReservationIds };

    try {
      const response = await fetch("https://api.miniteam2.store/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      if (responseData.result.resultMessage === "success") {
        const updatedItems = items.filter((item) => !selectedReservationIds.includes(item.reservationId));
        setItems(updatedItems);
        setSelectedItems(new Array(updatedItems.length).fill(false));
      } else {
        console.error("Error deleting items:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting items:", error);
    }
  };

  return (
    <ListBox>
      <Wrapper>
        <ControlContainer>
          <SelectBox>
            <input type="checkbox" onChange={handleSelectAll} />
            <div>전체선택</div>
          </SelectBox>
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ControlContainer>

        <div>
          {items.map((item, index) => (
            <InfoContainer key={item.roomId}>
              <CartItem item={item} />
            </InfoContainer>
          ))}
        </div>
      </Wrapper>
    </ListBox>
  );
};

export default CartList;
