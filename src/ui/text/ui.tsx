import { FC, createElement } from "react";
import { cn } from "../../lib";

type Props = {
  as: "p" | "span";
  className?: string;
  children: React.ReactNode;
};

export const Text: FC<Props> = ({ as, className, children }) => {
  return createElement(as, { className: cn(className) }, children);
};
