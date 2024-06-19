import { ContainerStyled } from "./Container.styles";
import { type ContainerProps } from "./Container.types";

const Container = ({ $flex = false, children }: ContainerProps) => {
  return <ContainerStyled $flex={$flex}>{children}</ContainerStyled>;
};

export default Container;
