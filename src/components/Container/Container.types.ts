export interface ContainerStyledProps {
  $flex: boolean;
}

export interface ContainerProps extends Partial<ContainerStyledProps>, React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
}
