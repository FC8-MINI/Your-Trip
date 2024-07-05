"use client";

import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchBox, SearchButton, SearchFormStyled, SearchInputBox } from "./SearchForm.styles";
import { useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { getCurrentKSTDateTimeLocal } from "@/utils/time";
import { useEffect, useMemo } from "react";

const SearchForm = () => {
  const router = useRouter();
  const params = useSearchParams();

  const initialState = useMemo(() => {
    return {
      accomodation: params.get("name") || "",
      checkIn: params.get("checkIn") || "",
      checkOut: params.get("checkOut") || "",
    };
  }, [params]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ defaultValues: initialState });

  const onSubmit: SubmitHandler<typeof initialState> = ({ accomodation, checkIn, checkOut }) => {
    const nextUrl = `/?${accomodation ? `name=${accomodation}` : ""}${accomodation && checkIn && checkOut ? "&" : ""}${checkIn && checkOut ? `checkIn=${checkIn}:00&checkOut=${checkOut}:00` : ""}`;
    router.push(nextUrl);
  };

  useEffect(() => {
    setValue("accomodation", params.get("name") || "");
    setValue("checkIn", params.get("checkIn") || "");
    setValue("checkOut", params.get("checkOut") || "");
  }, [params, setValue]);

  return (
    <SearchBox $error={errors.accomodation || errors.checkIn || errors.checkOut}>
      <SearchFormStyled onSubmit={handleSubmit(onSubmit)} $error={!!errors.accomodation}>
        <SearchInputBox>
          <Input
            label="숙소명"
            placeholder="숙소명을 입력해주세요."
            autoComplete="off"
            {...register("accomodation", {
              minLength: {
                value: 2,
                message: "최소 2글자 이상 입력해주세요.",
              },
            })}
            error={errors.accomodation?.message}
            $size="full"
          />
        </SearchInputBox>
        <SearchInputBox>
          <Input
            type="datetime-local"
            label="체크인"
            placeholder="체크인을 입력해주세요."
            autoComplete="off"
            min={getCurrentKSTDateTimeLocal()}
            max={watch("checkOut")}
            step="60"
            {...register("checkIn", {
              validate: (value, formValues) => {
                if (!value && formValues.checkOut) {
                  return "체크인과 체크아웃 모두 입력해야 합니다.";
                }
                return true;
              },
            })}
            error={errors.checkIn?.message}
            $size="full"
          />
        </SearchInputBox>
        <SearchInputBox>
          <Input
            type="datetime-local"
            label="체크아웃"
            placeholder="체크아웃을 입력해주세요."
            autoComplete="off"
            min={watch("checkIn") || getCurrentKSTDateTimeLocal()}
            step="60"
            {...register("checkOut", {
              validate: (value, formValues) => {
                if (!value && formValues.checkIn) {
                  return "체크인과 체크아웃 모두 입력해야 합니다.";
                }
                return true;
              },
            })}
            error={errors.checkOut?.message}
            $size="full"
          />
        </SearchInputBox>
        <SearchButton type="submit" $mode="primary" $error={!!errors.accomodation}>
          <CiSearch style={{ fontSize: "3.2rem" }} />
        </SearchButton>
      </SearchFormStyled>
    </SearchBox>
  );
};

export default SearchForm;
