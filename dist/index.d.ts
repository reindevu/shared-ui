import * as Headless from '@headlessui/react';
import React$1, { FC, Fragment, HTMLProps } from 'react';
import { FieldError } from 'react-hook-form';
import { ClassValue } from 'clsx';

interface Props$f extends Headless.ButtonProps {
    variant?: "primary" | "secondary" | "tertinary" | "unstyled";
}
declare const Button: FC<Props$f>;

type Props$e = Headless.DescriptionProps;
declare const Description: FC<Props$e>;

type Props$d = {
    open: boolean;
    onOpenChange: () => void;
    header?: string;
    children: React.ReactNode;
    panelClassName?: string;
    childrenClassName?: string;
};
declare const Drawer: FC<Props$d>;

type Props$c = {
    error?: FieldError;
};
declare const FormError: FC<Props$c>;

interface Props$b extends Headless.InputProps {
}
declare const Input: FC<Props$b>;

type Props$a = Headless.LabelProps;
declare const Label: FC<Props$a>;

type Props$9 = {
    className?: string;
    placeholder?: React$1.ReactNode;
    hideSearch?: boolean;
    virtualized?: boolean;
    children: React$1.ReactElement | Array<React$1.ReactElement>;
} & Headless.ListboxProps<typeof Fragment, SelectValue[] | SelectValue | null>;
type SelectValue = {
    id: string;
    name: string;
};
declare const Select: FC<Props$9>;
type SelectOptionProps = {
    children: React$1.ReactNode;
    className?: string;
} & Headless.ListboxOptionProps<"div", unknown>;
declare const SelectOption: FC<SelectOptionProps>;
type SelectLabelProps = React$1.ComponentPropsWithoutRef<"span">;
declare const SelectLabel: FC<SelectLabelProps>;

type ListItem<T> = SelectValue & T;
declare const getSelectSingleValue: <T>(value: string, list: ListItem<T>[] | SelectValue[]) => ListItem<T> | null;
declare const getSelectMultipleValue: <T>(listValues: string[], list: SelectValue[]) => Array<SelectValue>;

type Props$8 = Headless.TextareaProps & {
    rows?: number;
    readOnly?: boolean;
};
declare const Textarea: FC<Props$8>;

declare function cn(...inputs: ClassValue[]): string;
declare function useIsMobile(): boolean;

type Props$7 = {
    as: "p" | "span";
    className?: string;
    children: React.ReactNode;
};
declare const Text: FC<Props$7>;

type GenericTableColumnType = {
    title: string;
    key: string;
    width?: number;
    dataIndex: string;
    render?: (row: any) => React.ReactNode;
};

type Props$6 = {
    columns: GenericTableColumnType[];
    dataSource: any[];
    pagination: {
        pageSize: number;
        pageNumber: number;
        recordsCount: number;
    };
};
declare const GenericTable: FC<Props$6>;

type UseGenericTableFilterProps = {
    keys: string[];
};
declare const useGenericTableFilter: (props: UseGenericTableFilterProps) => {
    filter: Record<string, string>;
    setFilter: (newFilter: Record<string, string>) => void;
};

declare const GenericTableSearch: FC;

type Props$5 = {
    onEdit: () => void;
};
declare const GenericTableRowAction: FC<Props$5>;

type Props$4 = HTMLProps<HTMLDivElement>;
declare const Container: FC<Props$4>;

type Props$3 = HTMLProps<HTMLDivElement>;
declare const Wrapper: FC<Props$3>;

type Props$2 = Headless.FieldProps;
declare const Field: FC<Props$2>;

type Props$1 = {
    to: string;
    children: React.ReactNode;
};
declare const NavLink: FC<Props$1>;

type Props = {
    children: React.ReactNode;
};
declare const NavTitle: FC<Props>;

export { Button, Container, Description, Drawer, Field, FormError, GenericTable, GenericTableColumnType, GenericTableRowAction, GenericTableSearch, Input, Label, NavLink, NavTitle, Select, SelectLabel, SelectOption, Text, Textarea, Wrapper, cn, getSelectMultipleValue, getSelectSingleValue, useGenericTableFilter, useIsMobile };
