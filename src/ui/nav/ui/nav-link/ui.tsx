
import { FC } from "react";
import * as ReactRouterDom from "react-router-dom";
import { cn } from "../../../../lib";
import { Text } from "../../../text";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink: FC<Props> = ({ to, children }) => {
  return (
    <ReactRouterDom.NavLink
      to={to}
      className={({ isActive }) =>
        cn("text-gray-500 py-1 px-3 rounded-lg transition-all", {
          "bg-gray-200 text-black font-medium": isActive,
        })
      }
    >
      <Text as="p" className="text-sm truncate">
        {children}
      </Text>
    </ReactRouterDom.NavLink>
  );
};
