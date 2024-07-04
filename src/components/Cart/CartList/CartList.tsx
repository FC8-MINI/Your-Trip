"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CartItem from "../CartItem";
import { CartListProps } from "./CartList.types";
import { Cart, DeleteRequestPayload } from "../CartItem/CartItem.types";
import { ListBox, Wrapper, SelectBox, DeleteButton, ControlContainer, InfoContainer } from "./CartList.styles";

const CartList = ({ roomNames, items: initialItems }: CartListProps) => {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(new Array(initialItems.length).fill(false));
  const methods = useForm<{ items: Cart[] }>({
    defaultValues: {
      items: initialItems,
    },
  });

  const { watch, setValue } = methods;
  const items = watch("items");

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectedItems(new Array(items.length).fill(isChecked));
  };

  const handleToggle = (index: number) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = !newSelectedItems[index];
    setSelectedItems(newSelectedItems);
  };

  const handleDelete = async () => {
    const selectedReservationIds = items
      .filter((_, index) => selectedItems[index])
      .map((item) => {
        if (item.reservationId !== undefined) {
          return parseInt(item.reservationId, 10);
        }
        return null;
      })
      .filter((id): id is number => id !== null);

    if (selectedReservationIds.length === 0) {
      console.warn("No items selected for deletion.");
      return;
    }

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
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response data:", responseData);

        const updatedItems = items.filter((_, index) => !selectedItems[index]);
        setValue("items", updatedItems);
        setSelectedItems(new Array(updatedItems.length).fill(false));
      } else {
        console.error("Error deleting items:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting items:", error);
    }
  };

  return (
    <FormProvider {...methods}>
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
                <CartItem
                  item={item}
                  roomNames={roomNames}
                  index={index}
                  isSelected={selectedItems[index]}
                  onToggle={() => handleToggle(index)}
                />
              </InfoContainer>
            ))}
          </div>
        </Wrapper>
      </ListBox>
    </FormProvider>
  );
};

export default CartList;
