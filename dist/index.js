"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button2,
  Description: () => Description2,
  Drawer: () => Drawer,
  FormError: () => FormError,
  Input: () => Input2,
  Label: () => Label2,
  Select: () => Select,
  SelectLabel: () => SelectLabel,
  SelectOption: () => SelectOption,
  Textarea: () => Textarea2,
  cn: () => cn,
  getSelectMultipleValue: () => getSelectMultipleValue,
  getSelectSingleValue: () => getSelectSingleValue
});
module.exports = __toCommonJS(src_exports);

// src/ui/button/ui.tsx
var Headless = __toESM(require("@headlessui/react"));

// src/lib.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/ui/button/ui.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button2 = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var Headless2 = __toESM(require("@headlessui/react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Description2 = ({ children, className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Headless2.Description, { className: cn("text-xs text-neutral-600", className), ...props, children });
};
Description2.displayName = "Description";

// src/ui/drawer/ui.tsx
var Headless3 = __toESM(require("@headlessui/react"));
var import_outline = require("@heroicons/react/24/outline");
var import_clsx2 = __toESM(require("clsx"));
var import_react = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Drawer = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Headless3.Transition, { show: props.open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Headless3.Dialog, { as: "div", className: "relative z-[999]", onClose: props.onOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Headless3.TransitionChild,
      {
        as: import_react.Fragment,
        enter: "ease-in-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "fixed inset-0 transition-opacity backdrop-blur-[2px]" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex pl-10", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Headless3.TransitionChild,
      {
        as: import_react.Fragment,
        enter: "transform transition ease-in-out duration-500 sm:duration-700",
        enterFrom: "translate-x-full",
        enterTo: "translate-x-0",
        leave: "transform transition ease-in-out duration-500 sm:duration-700",
        leaveFrom: "translate-x-0",
        leaveTo: "translate-x-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Headless3.DialogPanel,
          {
            className: (0, import_clsx2.default)("pointer-events-auto relative w-screen lg:max-w-xl flex flex-col justify-center", props.panelClassName),
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex h-full flex-col overflow-y-scroll bg-white py-4 md:py-6 shadow-xl w-full", children: [
              props.header && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between px-4 sm:px-6", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Headless3.DialogTitle, { className: "text-base font-semibold leading-6 text-gray-900", children: props.header }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  Button2,
                  {
                    variant: "unstyled",
                    type: "button",
                    className: "relative rounded-md text-gray-300 focus:outline-none",
                    onClick: props.onOpenChange,
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline.XMarkIcon, { className: "h-6 w-6 text-black", "aria-hidden": "true" })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var FormError = (props) => {
  if (!props.error) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-xs text-red-600", children: props.error.message });
};
FormError.displayName = "FormError";

// src/ui/input/ui.tsx
var Headless4 = __toESM(require("@headlessui/react"));
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input2 = (0, import_react2.forwardRef)(({ className = "", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var Headless5 = __toESM(require("@headlessui/react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var Label2 = ({ children, className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Headless5.Label, { className: cn("text-sm text-neutral-600", className), ...props, children });
};
Label2.displayName = "Label";

// src/ui/select/ui.tsx
var Headless6 = __toESM(require("@headlessui/react"));
var import_react3 = require("react");
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Select = (0, import_react3.forwardRef)(
  ({ value, defaultValue, children: options, ...props }, ref) => {
    const [query, setQuery] = (0, import_react3.useState)("");
    const [selectedValues, setSelectedValues] = (0, import_react3.useState)(() => {
      const initial = value ?? defaultValue ?? [];
      return Array.isArray(initial) ? initial : [initial];
    });
    const [itemsToRender, setItemsToRender] = (0, import_react3.useState)(
      () => props.virtualized ? [] : Array.isArray(options) ? options : [options]
    );
    const handleChange = (value2) => {
      const newSelected = Array.isArray(value2) ? value2.filter((item) => item.id) : value2.id ? [value2] : [];
      setQuery("");
      setSelectedValues(newSelected);
      props.onChange?.(value2);
    };
    (0, import_react3.useEffect)(() => {
      if (props.virtualized) {
        return;
      }
      const q = query.toLowerCase();
      setItemsToRender(
        import_react3.Children.toArray(options).filter(import_react3.isValidElement).filter(
          (el) => el.props.value.name.toLowerCase().includes(q)
        )
      );
    }, [options, query]);
    (0, import_react3.useEffect)(() => {
      setSelectedValues(value ? Array.isArray(value) ? value : [value] : []);
    }, [value]);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Headless6.ListboxOption, { as: import_react3.Fragment, ...props, children: ({ selectedOption }) => {
    if (selectedOption) {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: cn(className, "flex min-w-0 items-center"), children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "group/option data-[focus]:bg-neutral-100 data-[disabled]:opacity-50 flex justify-between p-1.5 rounded-md cursor-pointer data-[selected]:bg-neutral-100", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: cn(className, "flex min-w-0 items-center"), children }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline2.CheckIcon, { className: "w-4 h-4 text-black relative hidden stroke-current group-data-[selected]/option:inline" })
    ] });
  } });
};
var SelectLabel = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  "span",
  {
    className: cn(
      className,
      "truncate first:ml-0 sm:ml-2 sm:first:ml-0 text-sm"
    ),
    ...props
  }
);
var SelectList = (0, import_react3.forwardRef)(
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
    const rootRef = (0, import_react3.useRef)(null);
    const isShowInput = !hideSearch && !virtualized;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            Headless6.ListboxButton,
            {
              className: cn(
                "relative flex items-center w-full border border-neutral-300 border-solid bg-white rounded-md h-8 shadow-sm appearance-none",
                className
              ),
              children: [
                selectedValues.length > 0 && selectedValues[0].id ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "relative block w-full appearance-none truncate rounded-md py-[calc(theme(spacing[1.5]))] text-black text-left text-sm px-2 bg-transparent", children: selectedValues[0].name }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "relative block w-full appearance-none truncate rounded-md px-2 text-left text-sm text-neutral-500", children: placeholder ?? "123" }),
                selectedValues.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "absolute inset-y-0 right-6 my-auto h-fit bg-violet-500 text-[0.625rem] text-white py-px px-1.5 rounded-md", children: [
                  "+ ",
                  selectedValues.length - 1
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline2.ChevronUpDownIcon, { className: "size-5 stroke-zinc-500 group-data-[disabled]:stroke-zinc-600 sm:size-4" }) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            Headless6.ListboxOptions,
            {
              as: "div",
              transition: true,
              anchor: "bottom start",
              style: { width: rootRef.current?.clientWidth },
              className: "mt-1 h-[230px] z-[9999] overflow-hidden rounded-md w-full overflow-y-scroll overscroll-contain bg-white backdrop-blur-xl shadow-lg ring-1 ring-zinc-950/10 transition-opacity duration-200 ease-in data-[transition]:pointer-events-none data-[closed]:data-[leave]:opacity-0",
              children: [
                isShowInput && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  Input2,
                  {
                    className: "rounded-none rounded-t-lg border-l-0 border-r-0 border-t-0 shadow-none outline-0 ring-0 focus:border-primary-300 focus:outline-none focus:ring-0",
                    onChange: (e) => onQueryChange(e.target.value)
                  }
                ),
                virtualized && children,
                !virtualized && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "p-1", children: itemsToRender.length > 0 ? itemsToRender : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "flex h-9 items-center justify-center text-sm", children: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E" }) })
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
var Headless7 = __toESM(require("@headlessui/react"));
var import_react4 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Textarea2 = (0, import_react4.forwardRef)(
  ({ className, rows, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Description,
  Drawer,
  FormError,
  Input,
  Label,
  Select,
  SelectLabel,
  SelectOption,
  Textarea,
  cn,
  getSelectMultipleValue,
  getSelectSingleValue
});
//# sourceMappingURL=index.js.map