"use client";

import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import Hr from "../Hr";
import { FcGoogle } from "react-icons/fc";
import { OAuthText } from "../LoginForm";
import { SignupFormStyled, ToLoginText } from "./SignupForm.styles";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

const initialState = { email: "", password: "", passwordConfirm: "", name: "", nickname: "" };

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
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
      <SignupFormStyled onSubmit={handleSubmit(onSubmit)}>
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
              message: "8자이상 입력해주세요.",
            },
          })}
          error={errors.password?.message}
        />
        <Input
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요."
          autoComplete="off"
          {...register("passwordConfirm", {
            required: "비밀번호를 한번 더 입력해주세요.",
            validate: {
              check: (passwordConfirm) => {
                if (getValues("password") !== passwordConfirm) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            },
          })}
          error={errors.passwordConfirm?.message}
        />
        <Input
          label="이름"
          placeholder="이름을 입력해주세요."
          autoComplete="off"
          {...register("name", {
            required: "이름을 입력해주세요.",
          })}
          error={errors.name?.message}
        />
        <Input
          label="닉네임"
          placeholder="사용하실 닉네임을 입력해주세요."
          autoComplete="off"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
          })}
          error={errors.nickname?.message}
        />
        <Button type="submit" $mode="primary" $size="large">
          회원 가입
        </Button>
      </SignupFormStyled>
      <Button $size="large">
        <OAuthText>
          <FcGoogle />
          구글로 회원 가입
        </OAuthText>
      </Button>
      <Button $mode="kakao" $size="large">
        <OAuthText>
          <RiKakaoTalkFill />
          카카오로 회원 가입
        </OAuthText>
      </Button>
      <Hr $size="short" />
      <ToLoginText>계정이 이미 있으신가요?</ToLoginText>
      <Button $size="large" onClick={() => router.push("/login")}>
        로그인
      </Button>
    </Container>
  );
};

export default SignupForm;
