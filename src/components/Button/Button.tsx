import ButtonStyled from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ mode = "common", size = "fit", children, ...props }: ButtonProps) => {
  return (
    <ButtonStyled mode={mode} size={size} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
