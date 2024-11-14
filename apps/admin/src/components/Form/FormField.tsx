import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, useId } from "react";

import styles from "./FormField.module.css";
import { TextField } from "@mui/material";

export function FormField<T>(props: FormFieldProps<T>): ReactNode {
    const inputId: string = useId();

    return (
        <div className={styles.labelContainer}>
            <TextField
                id={inputId}
                label={props.label}
                name={props.name.toString()}
                type={getType()}
                required={props.required}
                autoComplete={getAutoComplete()}
                className={styles.field}
                onChange={e => props.onChange?.(e.currentTarget.value)}
                onKeyDown={props.onKeyDown}
                value={props.value}
            />

            {props.labelHelp}
        </div>
    );

    function getAutoComplete(): HTMLInputAutoCompleteAttribute {
        if (!props.type) return "off";

        switch (props.type) {
            case "email":
            case "given-name":
            case "family-name":
                return props.type;

            case "password":
            case "text":
                return "off";

            default:
                return props.type satisfies never;
        }
    }

    function getType(): HTMLInputTypeAttribute {
        if (!props.type) return "text";

        switch (props.type) {
            case "email":
                return "email";

            case "given-name":
            case "family-name":
            case "text":
                return "text";

            case "password":
                return "password";

            default:
                return props.type satisfies never;
        }
    }
}

export interface FormFieldProps<T> {
    label: string;
    labelHelp?: ReactNode;
    required?: boolean;
    name: keyof T;
    type?: "email" | "text" | "password" | "given-name" | "family-name";
    onChange?: (value: string | undefined) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
}
