import { HrStyled } from "./Hr.styles";
import { type HrProps } from "./Hr.types";

const Hr = ({ $size = "full", $gap = false, ...props }: HrProps) => {
  return <HrStyled $size={$size} $gap={$gap} {...props} />;
};

export default Hr;
