export interface HrStyledProps {
  $size: "short" | "full";
  $gap: boolean;
}

export interface HrProps extends Partial<HrStyledProps>, React.ComponentPropsWithoutRef<"hr"> {}
