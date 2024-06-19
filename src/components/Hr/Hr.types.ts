export interface HrStyledProps {
  size: "short" | "full";
}

export interface HrProps extends Partial<HrStyledProps>, React.ComponentPropsWithoutRef<"hr"> {}
