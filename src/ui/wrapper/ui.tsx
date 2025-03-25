import { FC, HTMLProps } from "react";
import { cn } from "../../lib";

type Props = HTMLProps<HTMLDivElement>;

export const Wrapper: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("h-dvh flex flex-col bg-neutral-100", className)}
      {...props}
    >
      {children}
    </div>
  );
};
