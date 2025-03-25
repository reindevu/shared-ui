import { FC, HTMLProps } from "react";
import { cn } from "../../lib";

type Props = HTMLProps<HTMLDivElement>;

export const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "overflow-hidden h-full flex-1 grid grid-cols-[15rem_1fr]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
