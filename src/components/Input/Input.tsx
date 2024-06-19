import * as React from "react";
import { ErrorText, InputStyled, LabelText } from "./Input.styles";
import { type InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(function RefInput({ label, error, ...props }, ref) {
  return (
    <label>
      {label && <LabelText>{label}</LabelText>}
      <InputStyled ref={ref} $error={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
});

export default Input;
