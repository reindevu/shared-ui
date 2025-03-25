import React, { FC } from "react";
import { generatePagination } from "../../model/generate-pagination";
import { useGenericTableFilter } from "../../model/use-generic-table-filter";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../button";
import { cn } from "../../../../lib";

type GenericPaginationListProps = {
  pageSize: number;
  pageNumber: number;
  recordsCount: number;
};

export const GenericTablePagination: FC<GenericPaginationListProps> = ({
  pageSize,
  pageNumber,
  recordsCount,
}) => {
  const { filter, setFilter } = useGenericTableFilter({ keys: [] });

  const handleClick = (pn: number) => {
    setFilter({ ...filter, pn: `${pn}` });
  };

  const paginationList = generatePagination({
    pageSize,
    currentPage: pageNumber + 1,
    totalRecords: recordsCount,
    leftBoundaryCount: 1,
    rightBoundaryCount: 3,
    surroundingPagesCount: 1,
  });

  const handlePrev = () => {
    if (pageNumber === 0) {
      return;
    }

    setFilter({ ...filter, pn: `${pageNumber - 1}` });
  };

  const handleNext = () => {
    if (pageNumber + 1 === paginationList.totalPages) {
      return;
    }

    setFilter({ ...filter, pn: `${pageNumber + 1}` });
  };

  return (
    <div className="flex gap-1.5 items-center">
      <Button
        variant="tertinary"
        className="w-6 h-6 p-0 shadow-none disabled:opacity-50"
        onClick={handlePrev}
        disabled={pageNumber === 0}
      >
        <ChevronLeftIcon className="w-4 h-4 h" />
      </Button>

      {paginationList.visiblePages.map((key, index) => (
        <React.Fragment key={key.type + index}>
          {key.type === "page" && (
            <Button
              variant="tertinary"
              className={cn("w-6 h-6 shadow-none p-0 text-xs", {
                "bg-gray-100 text-gray-800 border-gray-300":
                  pageNumber === key.page - 1,
              })}
              onClick={() => handleClick((key.page ?? 1) - 1)}
            >
              {key.page}
            </Button>
          )}

          {key.type === "delimiter" && (
            <Button
              variant="unstyled"
              className="w-6 h-6 p-0 shadow-none text-xs flex items-end justify-center text-neutral-500"
            >
              ...
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        variant="tertinary"
        className="w-6 h-6 p-0 disabled:opacity-50 shadow-none"
        onClick={handleNext}
        disabled={pageNumber + 1 === paginationList.totalPages}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
