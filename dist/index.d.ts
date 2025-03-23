import * as Headless from '@headlessui/react';
import React$1, { FC, Fragment } from 'react';
import { FieldError } from 'react-hook-form';
import { ClassValue } from 'clsx';

interface Props$7 extends Headless.ButtonProps {
    variant?: "primary" | "secondary" | "tertinary" | "unstyled";
}
declare const Button: FC<Props$7>;

type Props$6 = Headless.DescriptionProps;
declare const Description: FC<Props$6>;

type Props$5 = {
    open: boolean;
    onOpenChange: () => void;
    header?: string;
    children: React.ReactNode;
    panelClassName?: string;
    childrenClassName?: string;
};
declare const Drawer: FC<Props$5>;

type Props$4 = {
    error?: FieldError;
};
declare const FormError: FC<Props$4>;

interface Props$3 extends Headless.InputProps {
}
declare const Input: FC<Props$3>;

type Props$2 = Headless.LabelProps;
declare const Label: FC<Props$2>;

type Props$1 = {
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
declare const Select: FC<Props$1>;
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

type Props = Headless.TextareaProps & {
    rows?: number;
    readOnly?: boolean;
};
declare const Textarea: FC<Props>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, Description, Drawer, FormError, Input, Label, Select, SelectLabel, SelectOption, Textarea, cn, getSelectMultipleValue, getSelectSingleValue };
