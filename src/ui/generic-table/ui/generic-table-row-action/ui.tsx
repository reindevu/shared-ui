import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { Button } from "../../../button";

type Props = {
  onEdit: () => void;
};

export const GenericTableRowAction: FC<Props> = ({ onEdit }) => {
  return (
    <div className="w-full md:justify-end md:flex mt-2 md:mt-0">
      <Button variant="unstyled" onClick={onEdit}>
        <PencilSquareIcon className="hidden md:inline w-5 h-5" />

        <span className="md:hidden">Редактировать запись</span>
      </Button>
    </div>
  );
};
