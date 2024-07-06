"use client";

import { useState, useEffect, ChangeEvent } from "react";
import CartItem from "../CartItem";
import { CartListProps, DeleteRequestPayload } from "./CartList.types";
import { Cart } from "../CartItem/CartItem.types";
import {
  ListBox,
  Wrapper,
  SelectBox,
  DeleteButton,
  ControlContainer,
  InfoContainer,
  EmptyMessage,
} from "./CartList.styles";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathnameWithoutQuerys } from "@/hooks/usePathnameWithoutQuerys";

const CartList = ({ items: initialItems }: CartListProps) => {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(new Array(initialItems.length).fill(false));
  const [items, setItems] = useState<Cart[]>(initialItems);
  const params = useSearchParams();
  const baseUrl = usePathnameWithoutQuerys(["page"]);
  const router = useRouter();

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
        await Swal.fire({
          customClass: {
            confirmButton: "btn btn-primary",
          },
          icon: "success",
          title: "삭제되었습니다.",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
        });
        setItems(updatedItems);
        setSelectedItems(new Array(updatedItems.length).fill(false));

        if (!updatedItems.length) {
          router.push(baseUrl + `page=${Number(params.get("page")) - 1 || 1}`);
        }
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

        {items.length === 0 ? (
          <EmptyMessage>장바구니가 비어 있습니다</EmptyMessage>
        ) : (
          <div>
            {items.map((item, index) => (
              <InfoContainer key={item.reservationId}>
                <CartItem index={index} item={item} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
              </InfoContainer>
            ))}
          </div>
        )}
      </Wrapper>
    </ListBox>
  );
};

export default CartList;
