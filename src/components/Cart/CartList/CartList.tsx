import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CartItem from "../CartItem";
import { CartListProps } from "./CartList.types";
import { Cart } from "../CartItem/CartItem.types";
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

  const handleDelete = () => {
    const updatedItems = items.filter((_, index) => !selectedItems[index]);
    setValue("items", updatedItems);
    setSelectedItems(selectedItems.filter((_, index) => !selectedItems[index]));
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
              <InfoContainer key={item.id}>
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
