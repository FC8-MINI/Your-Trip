import { HrStyled } from "./Hr.styles";
import { type HrProps } from "./Hr.types";

const Hr = ({ size = "full", ...props }: HrProps) => {
  return <HrStyled {...props} />;
};

export default Hr;
