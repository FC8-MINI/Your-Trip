"use client";

import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Hr from "@/components/Hr";
import { LoginFormStyled, ToSignInText } from "./LoginForm.styles";
import Container from "../Container";

const initialState = { email: "", password: "" };

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
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
    <Container $flex={true}>
      <LoginFormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          {...register("email", { required: "이메일을 입력해주세요." })}
          error={errors.email?.message}
        />
        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            min: "8자이상 입력해주세요.",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "허용되지 않은 이메일 형식입니다.",
            },
          })}
          error={errors.password?.message}
        />
        <Button type="submit" $mode="primary" $size="large">
          로그인
        </Button>
      </LoginFormStyled>
      <Button $size="large">구글로 로그인</Button>
      <Button $size="large">카카오로 로그인</Button>
      <Hr $size="short" />
      <ToSignInText>계정이 없으신가요?</ToSignInText>
      <Button $size="large" onClick={() => router.push("/signup")}>
        회원 가입
      </Button>
    </Container>
  );
};

export default LoginForm;
