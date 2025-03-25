import { FC } from "react";
import { Text } from "../../../text";

type Props = {
  children: React.ReactNode;
};

export const NavTitle: FC<Props> = ({ children }) => {
  return (
    <Text as="p" className="text-xs font-bold uppercase px-3">
      {children}
    </Text>
  );
};
