import * as React from "react";
import { ErrorText, InputStyled, LabelStyled, LabelText } from "./Input.styles";
import { type InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(function RefInput(
  { label, error, $size = "common", ...props },
  ref,
) {
  return (
    <LabelStyled $size={$size}>
      {label && <LabelText>{label}</LabelText>}
      <InputStyled ref={ref} $error={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </LabelStyled>
  );
});

export default Input;
