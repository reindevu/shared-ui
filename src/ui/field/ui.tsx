import * as Headless from '@headlessui/react';

import { FC } from "react";
import { cn } from '../../lib';


type Props = Headless.FieldProps;

export const Field: FC<Props> = ({ children, className, ...props }) => {
  return (
    <Headless.Field className={cn("space-y-1", className)} {...props}>
      {children}
    </Headless.Field>
  );
};
