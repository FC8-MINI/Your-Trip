import * as React from "react";

export interface ButtonStyledProps {
  $mode: "common" | "primary" | "kakao";
  $size: "fit" | "large";
}

export interface ButtonProps extends Partial<ButtonStyledProps>, React.ComponentPropsWithoutRef<"button"> {}
