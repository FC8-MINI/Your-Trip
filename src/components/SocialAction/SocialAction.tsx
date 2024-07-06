"use client";

import { useEffect, useState } from "react";
import { SocialActionLayout, LikeBox, LikeButton, LikeActiveButton } from "./SocialAction.styles";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { SocialActionProps } from "./SocialAction.types";
import Swal from "sweetalert2";

const SocialAction = ({ accommodationId, liked }: SocialActionProps) => {
  const [isLike, setIsLike] = useState(liked);

  useEffect(() => {
    setIsLike(liked);
  }, [liked]);

  const handleLikeClick = async () => {
    try {
      const url = `https://api.miniteam2.store/api/likes/${accommodationId}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({
          accommodationId,
        }),
      });

      if (!response.ok) {
        await Swal.fire({
          icon: "error",
          title: "로그인을 해주세요.",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      } else {
        setIsLike((prevLike) => !prevLike);
        await Swal.fire({
          icon: isLike ? "info" : "success",
          title: isLike ? "찜 목록에서 삭제되었습니다" : "찜 목록에 추가되었습니다",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SocialActionLayout>
      <LikeBox>
        {isLike ? (
          <LikeActiveButton onClick={handleLikeClick}>
            <RiHeart3Fill />
          </LikeActiveButton>
        ) : (
          <LikeButton onClick={handleLikeClick}>
            <RiHeart3Line />
          </LikeButton>
        )}
      </LikeBox>
    </SocialActionLayout>
  );
};

export default SocialAction;
