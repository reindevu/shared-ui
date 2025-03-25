import * as Headless from "@headlessui/react";
import { FC, forwardRef } from "react";

import { cn } from "../../lib";

interface Props extends Headless.InputProps {

}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = "", ...props }, ref) => {
  return (
    <Headless.Input
      ref={ref}
      className={cn(
        "bg-tranparent relative rounded-md p-2 h-8 w-full placeholder:text-sm text-sm placeholder:text-neutral-500 focus:outline-emerald-600 border border-neutral-300 border-solid bg-white data-[invalid]:outline-red-600",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";