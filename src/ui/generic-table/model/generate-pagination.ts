export type PaginationParams = {
  pageSize: number;
  currentPage: number;
  totalRecords: number;
  leftBoundaryCount: number;
  rightBoundaryCount: number;
  surroundingPagesCount: number;
};

type PaginationItem = { type: "page"; page: number } | { type: "delimiter" };

export const generatePagination = (props: PaginationParams): { visiblePages: PaginationItem[]; totalPages: number } => {
  const totalPages = Math.ceil(props.totalRecords / props.pageSize);

  const paginationItems: PaginationItem[] = [];

  const addPagesInRange = (start: number, end: number) => {
    for (let page = start; page <= end; page++) {
      paginationItems.push({ type: "page", page });
    }
  };

  addPagesInRange(1, props.leftBoundaryCount);

  if(totalPages === 1) {
    return { visiblePages: paginationItems, totalPages };
  }

  if(totalPages < props.rightBoundaryCount) {
    addPagesInRange(2, totalPages);
    
    return { visiblePages: paginationItems, totalPages };
  }

  let centerStart = Math.max(props.leftBoundaryCount + 1, props.currentPage - props.surroundingPagesCount);
  let centerEnd = Math.min(totalPages - props.rightBoundaryCount, centerStart + props.surroundingPagesCount * 2);
  centerStart = Math.max(props.leftBoundaryCount + 1, centerEnd - props.surroundingPagesCount * 2);

  if (centerStart > props.leftBoundaryCount + 1) {
    paginationItems.push({ type: "delimiter" });
  }

  addPagesInRange(centerStart, centerEnd);

  if (centerEnd < totalPages - props.rightBoundaryCount) {
    paginationItems.push({ type: "delimiter" });
  }


  addPagesInRange(totalPages - props.rightBoundaryCount + 1, totalPages);

  return { visiblePages: paginationItems, totalPages };
};