export interface InputStyledProps {
  error: boolean;
}

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label?: string;
  error?: string;
}
