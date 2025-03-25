// src/ui/button/ui.tsx
import * as Headless from "@headlessui/react";

// src/lib.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile;
}

// src/ui/button/ui.tsx
import { jsx } from "react/jsx-runtime";
var Button2 = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Headless.Button,
    {
      className: cn(
        "text-xs",
        {
          "rounded-md gap-2 px-2.5 h-8 py-1.5 cursor-pointer border-none flex items-center justify-center text-sm disabled:opacity-50": variant !== "unstyled",
          "border-none bg-transparent cursor-pointer w-fit h-fit": variant === "unstyled",
          "bg-emerald-600 font-medium text-white border border-black/10 border-solid": variant === "primary",
          "border border-gray-200 border-solid text-neutral-500": variant === "tertinary",
          "border border-blue-300 border-solid text-blue-500": variant === "secondary"
        },
        className
      ),
      ...props,
      children
    }
  );
};
Button2.displayName = "Button";

// src/ui/description/ui.tsx
import * as Headless2 from "@headlessui/react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Description2 = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx2(Headless2.Description, { className: cn("text-xs text-neutral-600", className), ...props, children });
};
Description2.displayName = "Description";

// src/ui/drawer/ui.tsx
import * as Headless3 from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx2 from "clsx";
import { Fragment } from "react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Drawer = (props) => {
  return /* @__PURE__ */ jsx3(Headless3.Transition, { show: props.open, as: Fragment, children: /* @__PURE__ */ jsxs(Headless3.Dialog, { as: "div", className: "relative z-[999]", onClose: props.onOpenChange, children: [
    /* @__PURE__ */ jsx3(
      Headless3.TransitionChild,
      {
        as: Fragment,
        enter: "ease-in-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ jsx3("div", { className: "fixed inset-0 transition-opacity backdrop-blur-[2px]" })
      }
    ),
    /* @__PURE__ */ jsx3("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ jsx3("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx3("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex pl-10", children: /* @__PURE__ */ jsx3(
      Headless3.TransitionChild,
      {
        as: Fragment,
        enter: "transform transition ease-in-out duration-500 sm:duration-700",
        enterFrom: "translate-x-full",
        enterTo: "translate-x-0",
        leave: "transform transition ease-in-out duration-500 sm:duration-700",
        leaveFrom: "translate-x-0",
        leaveTo: "translate-x-full",
        children: /* @__PURE__ */ jsx3(
          Headless3.DialogPanel,
          {
            className: clsx2("pointer-events-auto relative w-screen lg:max-w-xl flex flex-col justify-center", props.panelClassName),
            children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-y-scroll bg-white py-4 md:py-6 shadow-xl w-full", children: [
              props.header && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 sm:px-6", children: [
                /* @__PURE__ */ jsx3(Headless3.DialogTitle, { className: "text-base font-semibold leading-6 text-gray-900", children: props.header }),
                /* @__PURE__ */ jsx3(
                  Button2,
                  {
                    variant: "unstyled",
                    type: "button",
                    className: "relative rounded-md text-gray-300 focus:outline-none",
                    onClick: props.onOpenChange,
                    children: /* @__PURE__ */ jsx3(XMarkIcon, { className: "h-6 w-6 text-black", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx3(
                "div",
                {
                  className: cn("relative flex-1 px-4 md:px-6", props.childrenClassName, {
                    "mt-6": !!props.header
                  }),
                  children: props.children
                }
              )
            ] })
          }
        )
      }
    ) }) }) })
  ] }) });
};
Drawer.displayName = "Drawer";

// src/ui/form-error/ui.tsx
import { Fragment as Fragment2, jsx as jsx4 } from "react/jsx-runtime";
var FormError = (props) => {
  if (!props.error) {
    return /* @__PURE__ */ jsx4(Fragment2, {});
  }
  return /* @__PURE__ */ jsx4("p", { className: "text-xs text-red-600", children: props.error.message });
};
FormError.displayName = "FormError";

// src/ui/input/ui.tsx
import * as Headless4 from "@headlessui/react";
import { forwardRef } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Input2 = forwardRef(({ className = "", ...props }, ref) => {
  return /* @__PURE__ */ jsx5(
    Headless4.Input,
    {
      ref,
      className: cn(
        "bg-tranparent relative rounded-md p-2 h-8 w-full placeholder:text-sm text-sm placeholder:text-neutral-500 focus:outline-emerald-600 border border-neutral-300 border-solid bg-white data-[invalid]:outline-red-600",
        className
      ),
      ...props
    }
  );
});
Input2.displayName = "Input";

// src/ui/label/ui.tsx
import * as Headless5 from "@headlessui/react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Label2 = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx6(Headless5.Label, { className: cn("text-sm text-neutral-600", className), ...props, children });
};
Label2.displayName = "Label";

// src/ui/select/ui.tsx
import * as Headless6 from "@headlessui/react";
import {
  Children,
  forwardRef as forwardRef2,
  Fragment as Fragment3,
  isValidElement,
  useEffect as useEffect2,
  useRef,
  useState as useState2
} from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var Select = forwardRef2(
  ({ value, defaultValue, children: options, ...props }, ref) => {
    const [query, setQuery] = useState2("");
    const [selectedValues, setSelectedValues] = useState2(() => {
      const initial = value ?? defaultValue ?? [];
      return Array.isArray(initial) ? initial : [initial];
    });
    const [itemsToRender, setItemsToRender] = useState2(
      () => props.virtualized ? [] : Array.isArray(options) ? options : [options]
    );
    const handleChange = (value2) => {
      const newSelected = Array.isArray(value2) ? value2.filter((item) => item.id) : value2.id ? [value2] : [];
      setQuery("");
      setSelectedValues(newSelected);
      props.onChange?.(value2);
    };
    useEffect2(() => {
      if (props.virtualized) {
        return;
      }
      const q = query.toLowerCase();
      setItemsToRender(
        Children.toArray(options).filter(isValidElement).filter(
          (el) => el.props.value.name.toLowerCase().includes(q)
        )
      );
    }, [options, query]);
    useEffect2(() => {
      setSelectedValues(value ? Array.isArray(value) ? value : [value] : []);
    }, [value]);
    return /* @__PURE__ */ jsx7(
      SelectList,
      {
        ...ref,
        ...props,
        selectedValues,
        itemsToRender,
        children: options,
        onChange: handleChange,
        onQueryChange: setQuery
      }
    );
  }
);
var SelectOption = ({
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx7(Headless6.ListboxOption, { as: Fragment3, ...props, children: ({ selectedOption }) => {
    if (selectedOption) {
      return /* @__PURE__ */ jsx7("div", { className: cn(className, "flex min-w-0 items-center"), children });
    }
    return /* @__PURE__ */ jsxs2("div", { className: "group/option data-[focus]:bg-neutral-100 data-[disabled]:opacity-50 flex justify-between p-1.5 rounded-md cursor-pointer data-[selected]:bg-neutral-100", children: [
      /* @__PURE__ */ jsx7("span", { className: cn(className, "flex min-w-0 items-center"), children }),
      /* @__PURE__ */ jsx7(CheckIcon, { className: "w-4 h-4 text-black relative hidden stroke-current group-data-[selected]/option:inline" })
    ] });
  } });
};
var SelectLabel = ({ className, ...props }) => /* @__PURE__ */ jsx7(
  "span",
  {
    className: cn(
      className,
      "truncate first:ml-0 sm:ml-2 sm:first:ml-0 text-sm"
    ),
    ...props
  }
);
var SelectList = forwardRef2(
  ({
    children,
    className,
    itemsToRender,
    hideSearch = false,
    multiple,
    placeholder,
    selectedValues,
    virtualized,
    onChange,
    onQueryChange,
    ...props
  }, _) => {
    const rootRef = useRef(null);
    const isShowInput = !hideSearch && !virtualized;
    return /* @__PURE__ */ jsxs2(
      Headless6.Listbox,
      {
        ...props,
        as: "div",
        className: "w-full",
        ref: rootRef,
        value: multiple ? selectedValues : selectedValues[0] ?? "",
        multiple,
        onChange,
        children: [
          /* @__PURE__ */ jsxs2(
            Headless6.ListboxButton,
            {
              className: cn(
                "relative flex items-center w-full border border-neutral-300 border-solid bg-white rounded-md h-8 shadow-sm appearance-none",
                className
              ),
              children: [
                selectedValues.length > 0 && selectedValues[0].id ? /* @__PURE__ */ jsx7("span", { className: "relative block w-full appearance-none truncate rounded-md py-[calc(theme(spacing[1.5]))] text-black text-left text-sm px-2 bg-transparent", children: selectedValues[0].name }) : /* @__PURE__ */ jsx7("p", { className: "relative block w-full appearance-none truncate rounded-md px-2 text-left text-sm text-neutral-500", children: placeholder ?? "123" }),
                selectedValues.length > 1 && /* @__PURE__ */ jsxs2("div", { className: "absolute inset-y-0 right-6 my-auto h-fit bg-violet-500 text-[0.625rem] text-white py-px px-1.5 rounded-md", children: [
                  "+ ",
                  selectedValues.length - 1
                ] }),
                /* @__PURE__ */ jsx7("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsx7(ChevronUpDownIcon, { className: "size-5 stroke-zinc-500 group-data-[disabled]:stroke-zinc-600 sm:size-4" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs2(
            Headless6.ListboxOptions,
            {
              as: "div",
              transition: true,
              anchor: "bottom start",
              style: { width: rootRef.current?.clientWidth },
              className: "mt-1 h-[230px] z-[9999] overflow-hidden rounded-md w-full overflow-y-scroll overscroll-contain bg-white backdrop-blur-xl shadow-lg ring-1 ring-zinc-950/10 transition-opacity duration-200 ease-in data-[transition]:pointer-events-none data-[closed]:data-[leave]:opacity-0",
              children: [
                isShowInput && /* @__PURE__ */ jsx7(
                  Input2,
                  {
                    className: "rounded-none rounded-t-lg border-l-0 border-r-0 border-t-0 shadow-none outline-0 ring-0 focus:border-primary-300 focus:outline-none focus:ring-0",
                    onChange: (e) => onQueryChange(e.target.value)
                  }
                ),
                virtualized && children,
                !virtualized && /* @__PURE__ */ jsx7("div", { className: "p-1", children: itemsToRender.length > 0 ? itemsToRender : /* @__PURE__ */ jsx7("p", { className: "flex h-9 items-center justify-center text-sm", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }) })
              ]
            }
          )
        ]
      }
    );
  }
);
Select.displayName = "Select";
SelectLabel.displayName = "SelectLabel";
SelectOption.displayName = "SelectOption";

// src/ui/select/model.ts
var getSelectSingleValue = (value, list) => {
  const findEl = list.find((el) => el.id === value);
  if (!findEl) {
    return null;
  }
  return findEl;
};
var getSelectMultipleValue = (listValues, list) => {
  const arr = [];
  listValues.forEach((value) => {
    const findEl = list.find((el) => el.id === value);
    if (findEl) {
      arr.push(findEl);
    }
  });
  return arr;
};

// src/ui/textarea/ui.tsx
import * as Headless7 from "@headlessui/react";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Textarea2 = forwardRef3(
  ({ className, rows, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
      Headless7.Textarea,
      {
        ref,
        className: cn(
          "w-full rounded-md bg-transparent p-2.5 placeholder:text-sm text-sm shadow-sm placeholder:text-neutral-500 focus:outline-none border border-neutral-300 border-solid",
          className
        ),
        rows,
        ...props
      }
    );
  }
);
Textarea2.displayName = "Textarea";

// src/ui/text/ui.tsx
import { createElement } from "react";
var Text = ({ as, className, children }) => {
  return createElement(as, { className: cn(className) }, children);
};

// src/ui/generic-table/ui/generic-table-pagination/ui.tsx
import React2 from "react";

// src/ui/generic-table/model/generate-pagination.ts
var generatePagination = (props) => {
  const totalPages = Math.ceil(props.totalRecords / props.pageSize);
  const paginationItems = [];
  const addPagesInRange = (start, end) => {
    for (let page = start; page <= end; page++) {
      paginationItems.push({ type: "page", page });
    }
  };
  addPagesInRange(1, props.leftBoundaryCount);
  if (totalPages === 1) {
    return { visiblePages: paginationItems, totalPages };
  }
  if (totalPages < props.rightBoundaryCount) {
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

// src/ui/generic-table/model/use-generic-table-filter.ts
import { useEffect as useEffect3, useMemo, useState as useState3 } from "react";

// src/ui/generic-table/model/object-to-filter-string.ts
function objectToFilterString(obj) {
  if (!obj || typeof obj !== "object") {
    throw new Error("Input must be a valid object");
  }
  return Object.entries(obj).filter(([_, value]) => value !== void 0 && value !== null).map(
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  ).join("&");
}

// src/ui/generic-table/model/constants.ts
var GENERIC_PAGINATION_PN = "0";
var GENERIC_PAGINATION_PS = "15";

// src/ui/generic-table/model/use-generic-table-filter.ts
var useGenericTableFilter = (props) => {
  const keys = useMemo(() => Array.from(new Set(props.keys)), [props.keys]);
  const defaultFilter = { ps: GENERIC_PAGINATION_PS, pn: GENERIC_PAGINATION_PN };
  const [filter, setFilterState] = useState3(defaultFilter);
  const updateFilterFromParams = () => {
    const newFilter = { ...defaultFilter };
    setFilterState(newFilter);
  };
  const setFilter = (newFilter) => {
    objectToFilterString(newFilter);
  };
  useEffect3(() => {
    updateFilterFromParams();
  }, [location.search]);
  return { filter, setFilter };
};

// src/ui/generic-table/ui/generic-table-pagination/ui.tsx
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var GenericTablePagination = ({
  pageSize,
  pageNumber,
  recordsCount
}) => {
  const { filter, setFilter } = useGenericTableFilter({ keys: [] });
  const handleClick = (pn) => {
    setFilter({ ...filter, pn: `${pn}` });
  };
  const paginationList = generatePagination({
    pageSize,
    currentPage: pageNumber + 1,
    totalRecords: recordsCount,
    leftBoundaryCount: 1,
    rightBoundaryCount: 3,
    surroundingPagesCount: 1
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
  return /* @__PURE__ */ jsxs3("div", { className: "flex gap-1.5 items-center", children: [
    /* @__PURE__ */ jsx9(
      Button2,
      {
        variant: "tertinary",
        className: "w-6 h-6 p-0 shadow-none disabled:opacity-50",
        onClick: handlePrev,
        disabled: pageNumber === 0,
        children: /* @__PURE__ */ jsx9(ChevronLeftIcon, { className: "w-4 h-4 h" })
      }
    ),
    paginationList.visiblePages.map((key, index) => /* @__PURE__ */ jsxs3(React2.Fragment, { children: [
      key.type === "page" && /* @__PURE__ */ jsx9(
        Button2,
        {
          variant: "tertinary",
          className: cn("w-6 h-6 shadow-none p-0 text-xs", {
            "bg-gray-100 text-gray-800 border-gray-300": pageNumber === key.page - 1
          }),
          onClick: () => handleClick((key.page ?? 1) - 1),
          children: key.page
        }
      ),
      key.type === "delimiter" && /* @__PURE__ */ jsx9(
        Button2,
        {
          variant: "unstyled",
          className: "w-6 h-6 p-0 shadow-none text-xs flex items-end justify-center text-neutral-500",
          children: "..."
        }
      )
    ] }, key.type + index)),
    /* @__PURE__ */ jsx9(
      Button2,
      {
        variant: "tertinary",
        className: "w-6 h-6 p-0 disabled:opacity-50 shadow-none",
        onClick: handleNext,
        disabled: pageNumber + 1 === paginationList.totalPages,
        children: /* @__PURE__ */ jsx9(ChevronRightIcon, { className: "w-4 h-4" })
      }
    )
  ] });
};

// src/ui/field/ui.tsx
import * as Headless8 from "@headlessui/react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Field2 = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx10(Headless8.Field, { className: cn("space-y-1", className), ...props, children });
};

// src/ui/generic-table/ui/generic-table/ui.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var GenericTable = ({
  columns,
  dataSource,
  pagination
}) => {
  const { filter } = useGenericTableFilter({ keys: ["q", "pn", "ps"] });
  const isFilterNotEmpty = !!Object.keys(filter).length;
  const isShowPagination = isFilterNotEmpty && dataSource.length === 0;
  const isMobile = useIsMobile();
  if (isMobile) {
    const isShowTable = !!dataSource.length;
    return /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx11("p", { className: "text-sm mb-1", children: `\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439: ${pagination.recordsCount}` }),
      isShowTable && /* @__PURE__ */ jsx11("div", { className: "flex flex-col gap-2", children: dataSource.map((key) => /* @__PURE__ */ jsx11(
        Field2,
        {
          className: "bg-white p-2 rounded-md border border-gray-200 flex flex-col gap-1",
          children: columns.map((column, columnIndex) => /* @__PURE__ */ jsxs4(
            "div",
            {
              className: "text-black text-sm break-words",
              children: [
                /* @__PURE__ */ jsx11(Label2, { children: column.title }),
                /* @__PURE__ */ jsx11("div", { children: column.render ? column.render(key) : key[column.dataIndex] })
              ]
            },
            `${column.key}_${columnIndex}`
          ))
        },
        key.id
      )) }),
      isShowTable && /* @__PURE__ */ jsx11("div", { className: "flex justify-center mt-2", children: !isShowPagination && /* @__PURE__ */ jsx11(GenericTablePagination, { ...pagination }) })
    ] });
  }
  return /* @__PURE__ */ jsxs4("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs4("table", { className: "w-full text-sm text-left rtl:text-right table-fixed text-gray-500 border-spacing-0", children: [
      /* @__PURE__ */ jsx11("thead", { className: "text-gray-800 uppercase border-b border-gray-200", children: /* @__PURE__ */ jsx11("tr", { children: columns.map((key, index) => /* @__PURE__ */ jsx11(
        "th",
        {
          style: { width: key.width },
          scope: "col",
          className: "px-4 py-1.5 font-bold text-xs",
          children: key.title
        },
        `${key}_${index}`
      )) }) }),
      /* @__PURE__ */ jsx11("tbody", { children: dataSource.map((row) => /* @__PURE__ */ jsx11(
        "tr",
        {
          className: "border-b border-gray-200 last:border-b-0",
          children: columns.map((column, columnIndex) => /* @__PURE__ */ jsx11(
            "td",
            {
              className: "px-4 py-1.5 text-gray-800 text-sm break-words h-11",
              valign: "middle",
              children: column.render ? column.render(row) : row[column.dataIndex]
            },
            `${column.key}_${columnIndex}`
          ))
        },
        row.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs4(
      "div",
      {
        className: cn(
          "flex justify-between items-center py-2 border-t border-t-neutral-300 border-solid px-3",
          {
            "border-none justify-center": isShowPagination
          }
        ),
        children: [
          /* @__PURE__ */ jsx11("span", { className: "text-sm", children: `\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432: ${pagination.recordsCount}` }),
          !isShowPagination && /* @__PURE__ */ jsx11(GenericTablePagination, { ...pagination })
        ]
      }
    )
  ] });
};

// src/ui/generic-table/ui/generic-table-search/ui.tsx
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect as useEffect4, useState as useState4 } from "react";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var GenericTableSearch = () => {
  const { filter, setFilter } = useGenericTableFilter({ keys: ["q"] });
  const [query, setQuery] = useState4("");
  const handleSearch = () => {
    setFilter({ ...filter, q: query });
  };
  useEffect4(() => {
    setQuery(filter.q ?? "");
  }, [filter.q]);
  return /* @__PURE__ */ jsxs5("div", { className: "relative w-full md:w-fit mb-4", children: [
    /* @__PURE__ */ jsx12(
      Input2,
      {
        type: "text",
        className: "w-full md:w-96",
        value: query,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430",
        onChange: (e) => setQuery(e.currentTarget.value)
      }
    ),
    /* @__PURE__ */ jsx12("div", { className: "absolute top-1/2 -translate-y-2/4 right-1", children: /* @__PURE__ */ jsx12(Button2, { className: "h-6 w-6 p-0 text-xs", onClick: handleSearch, children: /* @__PURE__ */ jsx12(MagnifyingGlassIcon, { className: "text-violet-700 w-4 h-4" }) }) })
  ] });
};

// src/ui/generic-table/ui/generic-table-row-action/ui.tsx
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var GenericTableRowAction = ({ onEdit }) => {
  return /* @__PURE__ */ jsx13("div", { className: "w-full md:justify-end md:flex mt-2 md:mt-0", children: /* @__PURE__ */ jsxs6(Button2, { variant: "unstyled", onClick: onEdit, children: [
    /* @__PURE__ */ jsx13(PencilSquareIcon, { className: "hidden md:inline w-5 h-5" }),
    /* @__PURE__ */ jsx13("span", { className: "md:hidden", children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C" })
  ] }) });
};

// src/ui/container/ui.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Container = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: cn(
        "overflow-hidden h-full flex-1 grid grid-cols-[15rem_1fr]",
        className
      ),
      ...props,
      children
    }
  );
};

// src/ui/wrapper/ui.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Wrapper = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      className: cn("h-dvh flex flex-col bg-neutral-100", className),
      ...props,
      children
    }
  );
};

// src/ui/nav/ui/nav-link/ui.tsx
import * as ReactRouterDom from "react-router-dom";
import { jsx as jsx16 } from "react/jsx-runtime";
var NavLink2 = ({ to, children }) => {
  return /* @__PURE__ */ jsx16(
    ReactRouterDom.NavLink,
    {
      to,
      className: ({ isActive }) => cn("text-gray-500 py-1 px-3 rounded-lg transition-all", {
        "bg-gray-200 text-black font-medium": isActive
      }),
      children: /* @__PURE__ */ jsx16(Text, { as: "p", className: "text-sm truncate", children })
    }
  );
};

// src/ui/nav/ui/nav-title/ui.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var NavTitle = ({ children }) => {
  return /* @__PURE__ */ jsx17(Text, { as: "p", className: "text-xs font-bold uppercase px-3", children });
};
export {
  Button2 as Button,
  Container,
  Description2 as Description,
  Drawer,
  Field2 as Field,
  FormError,
  GenericTable,
  GenericTableRowAction,
  GenericTableSearch,
  Input2 as Input,
  Label2 as Label,
  NavLink2 as NavLink,
  NavTitle,
  Select,
  SelectLabel,
  SelectOption,
  Text,
  Textarea2 as Textarea,
  Wrapper,
  cn,
  getSelectMultipleValue,
  getSelectSingleValue,
  useGenericTableFilter,
  useIsMobile
};
//# sourceMappingURL=index.mjs.map