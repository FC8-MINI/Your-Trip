export interface InputStyledProps {
  $error: boolean;
}

export interface LabelStyledProps {
  $size: "common" | "full";
}

export interface InputProps extends Partial<LabelStyledProps>, React.ComponentPropsWithRef<"input"> {
  label?: string;
  error?: string;
}
