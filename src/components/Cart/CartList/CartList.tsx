import { useForm } from "react-hook-form";
import CartItem from "../CartItem";
import { CartListProps } from "./CartList.types";
import { ListBox, Wrapper, SelectBox, DeleteButton, ControlContainer, InfoContainer } from "./CartList.styles";

const CartList = ({ roomNames, peopleOptions, dateOptions, items: initialItems }: CartListProps) => {
  const methods = useForm({
    defaultValues: {
      items: initialItems,
    },
  });

  const { watch, setValue, getValues } = methods;
  const items = watch("items");

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const updatedItems = items.map((item) => ({
      ...item,
      selected: isChecked,
    }));
    setValue("items", updatedItems);
  };

  const handleDelete = () => {
    const updatedItems = items.filter((_, index) => !getValues(`items.${index}.selected`));
    setValue("items", updatedItems);
  };

  return (
    <ListBox {...methods}>
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
                peopleOptions={peopleOptions}
                dateOptions={dateOptions}
                index={index}
              />
            </InfoContainer>
          ))}
        </div>
      </Wrapper>
    </ListBox>
  );
};

export default CartList;
