"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Hr from "@/components/Hr";
import { LoginFormContainer, LoginFormStyled, OAuthText, ToSignupText } from "./LoginForm.styles";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { postEmailLogin } from "@/apis/auth/postEmailLogin";

const initialState = { email: "", password: "" };

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setError,
  } = useForm({ defaultValues: initialState });

  const onSubmit: SubmitHandler<typeof initialState> = async (formData) => {
    const [error, data] = await postEmailLogin(formData);

    if (error) {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "error",
        title: "로그인에 실패했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        willClose: () => {
          if (error.result.resultCode === "PASSWORD_MISMATCH") {
            setFocus("password");
            setError("password", { type: error.result.resultCode, message: error.result.resultDescription });
          }
          if (error.result.resultCode === "USER_NOT_FOUND") {
            setFocus("email");
            setError("email", { type: error.result.resultCode, message: error.result.resultDescription });
          }
        },
      });
    } else {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        title: "로그인에 성공했습니다.",
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
    <LoginFormContainer $flex={true}>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          autoComplete="off"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "허용되지 않은 이메일 형식입니다.",
            },
          })}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="off"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상입니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 16자 이하입니다.",
            },
          })}
          error={errors.password?.message}
        />
        <Button type="submit" $mode="primary" $size="large">
          로그인
        </Button>
      </LoginFormStyled>
      <Button $size="large">
        <OAuthText>
          <FcGoogle />
          구글로 로그인
        </OAuthText>
      </Button>
      <Button $mode="kakao" $size="large">
        <OAuthText>
          <RiKakaoTalkFill />
          카카오로 로그인
        </OAuthText>
      </Button>
      <Hr $size="short" />
      <ToSignupText>계정이 없으신가요?</ToSignupText>
      <Button $size="large" onClick={() => router.push("/signup")}>
        회원 가입
      </Button>
    </LoginFormContainer>
  );
};

export default LoginForm;
