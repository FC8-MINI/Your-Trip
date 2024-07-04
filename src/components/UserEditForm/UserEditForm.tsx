"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Swal from "sweetalert2";
import { UserEditFormContainer, UserEditFormStyled } from "./UserEditForm.styles";
import { putNickname } from "@/apis/auth/putNickname";

const initialState = { nickname: "" };

const UserEditForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setError,
  } = useForm({ defaultValues: initialState });

  const onSubmit: SubmitHandler<typeof initialState> = async (formData) => {
    const [error, data] = await putNickname(formData);

    if (error) {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "error",
        title: "닉네임 변경에 실패했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        willClose: () => {
          if (error.result.resultCode === "NICKNAME_ALREADY_EXISTS") {
            setFocus("nickname");
            setError("nickname", { type: error.result.resultCode, message: error.result.resultDescription });
          }
        },
      });
    } else {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        title: "닉네임 변경에 성공했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        willClose: () => {
          router.push("/");
        },
      });
    }
  };

  return (
    <UserEditFormContainer $flex={true}>
      <UserEditFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          autoComplete="off"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
          })}
          error={errors.nickname?.message}
        />
        <Button type="submit" $mode="primary" $size="large">
          변경하기
        </Button>
      </UserEditFormStyled>
    </UserEditFormContainer>
  );
};

export default UserEditForm;
