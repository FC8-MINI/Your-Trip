import { useForm, Controller } from "react-hook-form";
import CartItem from "../CartItem";
import { CartListProps } from "./CartList.types";
import { ListBox, Wrapper, Checkbox, DeleteButton, ControlContainer, InfoContainer } from "./CartList.styles";

const CartList = ({ roomNames, peopleOptions, dateOptions, items: initialItems }: CartListProps) => {
  const methods = useForm({
    defaultValues: {
      items: initialItems,
    },
  });

  const { control, watch, setValue, getValues } = methods;
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
          <Checkbox type="checkbox" onChange={handleSelectAll} />
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        </ControlContainer>

        <div>
          {items.map((item, index) => (
            <InfoContainer key={item.id}>
              <Controller
                name={`items.${index}.selected`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    type="checkbox"
                    checked={field.value || false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)}
                  />
                )}
              />
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
