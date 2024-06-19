export interface ContainerStyledProps {
  $flex: boolean;
}

export interface ContainerProps extends Partial<ContainerStyledProps> {
  children: React.ReactNode;
}
