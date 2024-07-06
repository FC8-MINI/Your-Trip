"use client";

import { useState } from "react";
import { TermsContainer, ButtonContainer, TermItem, BoldLabel, RegularLabel, PayButtonStyled } from "./PayTerms.styles";
import { PayTermsProps } from "./PayTerms.types";
import { TERMS } from "./PayTerms.constants";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { postReservation } from "@/apis/reservation/postReservation";
import { putCartReservation } from "@/apis/cart/putCartReservation";
import Hr from "@/components/Hr";

const PayTerms = ({ reservationId, roomId, peopleNumber, totalPrice, checkIn, checkOut }: PayTermsProps) => {
  const router = useRouter();

  const [terms, setTerms] = useState({ agreeAge: false, agreeCollect: false, agreeProvide: false });
  const agreeAll = terms.agreeAge && terms.agreeCollect && terms.agreeProvide;

  const onClickPayButton = async () => {
    if (reservationId) {
      const [error, data] = await putCartReservation({
        reservationId: Number(reservationId),
        roomId: Number(roomId),
        peopleNumber: Number(peopleNumber),
        checkIn,
        checkOut,
      });
      console.log(data);
      if (error) {
        if (
          error.result.resultCode === "INVALID_ACCESS_TOKEN" ||
          error.result.resultCode === "INVALID_TOKEN" ||
          error.result.resultCode === "INVALID_REFRESH_TOKEN"
        ) {
          const result = await Swal.fire({
            customClass: {
              confirmButton: "btn btn-primary",
            },
            icon: "error",
            title: "해당 기능은 로그인이 필요합니다.",
            showCloseButton: true,
            showConfirmButton: true,
          });

          if (result.isConfirmed) {
            router.push("/login");
          }
        } else {
          await Swal.fire({
            customClass: {
              confirmButton: "btn btn-primary",
            },
            icon: "error",
            title: error.result.resultDescription,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            willClose: () => {
              router.back();
            },
          });
        }
      } else {
        await Swal.fire({
          customClass: {
            confirmButton: "btn btn-primary",
          },
          icon: "success",
          title: "예약에 성공하셨습니다.",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
          willClose: () => {
            router.push("/reservation");
          },
        });
      }
    } else {
      const [error, data] = await postReservation({
        roomId: Number(roomId),
        peopleNumber: Number(peopleNumber),
        checkIn,
        checkOut,
      });
      console.log(data);
      if (error) {
        if (
          error.result.resultCode === "INVALID_ACCESS_TOKEN" ||
          error.result.resultCode === "INVALID_TOKEN" ||
          error.result.resultCode === "INVALID_REFRESH_TOKEN"
        ) {
          const result = await Swal.fire({
            customClass: {
              confirmButton: "btn btn-primary",
            },
            icon: "error",
            title: "해당 기능은 로그인이 필요합니다.",
            showCloseButton: true,
            showConfirmButton: true,
          });

          if (result.isConfirmed) {
            router.push("/login");
          }
        } else {
          await Swal.fire({
            customClass: {
              confirmButton: "btn btn-primary",
            },
            icon: "error",
            title: error.result.resultDescription,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1500,
            willClose: () => {
              router.back();
            },
          });
        }
      } else {
        await Swal.fire({
          customClass: {
            confirmButton: "btn btn-primary",
          },
          icon: "success",
          title: "예약에 성공하셨습니다.",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1500,
          willClose: () => {
            router.push("/reservation");
          },
        });
      }
    }
  };

  return (
    <TermsContainer>
      <TermItem>
        <input
          type="checkbox"
          checked={agreeAll}
          onChange={() => {
            if (agreeAll) setTerms({ agreeAge: false, agreeCollect: false, agreeProvide: false });
            else setTerms({ agreeAge: true, agreeCollect: true, agreeProvide: true });
          }}
        />
        <BoldLabel>전체 동의하기</BoldLabel>
      </TermItem>
      <Hr />
      {TERMS.map(({ id, label }) => {
        return (
          <TermItem key={id}>
            <input
              type="checkbox"
              checked={terms[id]}
              onChange={() => {
                if (terms[id]) setTerms({ ...terms, [id]: false });
                else setTerms({ ...terms, [id]: true });
              }}
            />
            <RegularLabel>{label}</RegularLabel>
          </TermItem>
        );
      })}
      <ButtonContainer>
        <PayButtonStyled $size="large" onClick={onClickPayButton} disabled={!agreeAll}>
          {Number(totalPrice).toLocaleString()}원 결제하기
        </PayButtonStyled>
      </ButtonContainer>
    </TermsContainer>
  );
};

export default PayTerms;
