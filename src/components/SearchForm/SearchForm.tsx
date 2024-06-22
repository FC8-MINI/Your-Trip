"use client";

import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchButton, SearchFormStyled } from "./SearchForm.styles";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const initialState = { accomodation: "" };

const SearchForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialState });

  const onSubmit: SubmitHandler<typeof initialState> = (data) => {
    try {
      router.push("/");
    } catch (error) {
      console.error("실패!!");
    }
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit(onSubmit)} $error={!!errors.accomodation}>
      <Input
        label="숙소명"
        placeholder="숙소명을 입력해주세요."
        autoComplete="off"
        {...register("accomodation", {
          required: "최소 1글자 이상 입력해야 합니다.",
        })}
        error={errors.accomodation?.message}
        $size="full"
      />
      <SearchButton type="submit" $mode="primary" $error={!!errors.accomodation}>
        <CiSearch style={{ fontSize: "3.2rem" }} />
      </SearchButton>
    </SearchFormStyled>
  );
};

export default SearchForm;
