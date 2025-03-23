// src/ui/button/ui.tsx
import * as Headless from "@headlessui/react";

// src/lib.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
        "text-xs shadow-md",
        {
          "rounded-md gap-2 px-3 h-8 py-1.5 cursor-pointer border-none flex items-center justify-center text-xs disabled:opacity-50": variant !== "unstyled",
          "border-none bg-transparent cursor-pointer w-fit h-fit": variant === "unstyled",
          "bg-neutral-500 font-medium text-white border border-black/10 border-solid": variant === "primary",
          "border border-neutral-300 border-solid text-neutral-500": variant === "tertinary",
          "border border-neutral-300 border-solid": variant === "secondary"
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
      className: cn("bg-tranparent relative rounded-md shadow-sm p-2 h-8 w-full placeholder:text-sm text-sm placeholder:text-neutral-500 focus:outline-none border border-neutral-300 border-solid bg-white", className),
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
  useEffect,
  useRef,
  useState
} from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var Select = forwardRef2(
  ({ value, defaultValue, children: options, ...props }, ref) => {
    const [query, setQuery] = useState("");
    const [selectedValues, setSelectedValues] = useState(() => {
      const initial = value ?? defaultValue ?? [];
      return Array.isArray(initial) ? initial : [initial];
    });
    const [itemsToRender, setItemsToRender] = useState(
      () => props.virtualized ? [] : Array.isArray(options) ? options : [options]
    );
    const handleChange = (value2) => {
      const newSelected = Array.isArray(value2) ? value2.filter((item) => item.id) : value2.id ? [value2] : [];
      setQuery("");
      setSelectedValues(newSelected);
      props.onChange?.(value2);
    };
    useEffect(() => {
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
    useEffect(() => {
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
export {
  Button2 as Button,
  Description2 as Description,
  Drawer,
  FormError,
  Input2 as Input,
  Label2 as Label,
  Select,
  SelectLabel,
  SelectOption,
  Textarea2 as Textarea,
  cn,
  getSelectMultipleValue,
  getSelectSingleValue
};
//# sourceMappingURL=index.mjs.map