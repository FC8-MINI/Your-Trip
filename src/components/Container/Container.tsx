import { ContainerStyled } from "./Container.styles";
import { type ContainerProps } from "./Container.types";

const Container = ({ $flex = false, children, ...props }: ContainerProps) => {
  return (
    <ContainerStyled $flex={$flex} {...props}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
