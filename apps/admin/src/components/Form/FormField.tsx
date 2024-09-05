import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, useId } from "react";

import styles from "./FormField.module.css";

export function FormField<T>(props: FormFieldProps<T>): ReactNode {
    const inputId: string = useId();

    return (
        <div>
            <div className={styles.labelContainer}>
                <label htmlFor={inputId} className={styles.label}>
                    {props.label}
                </label>
                {props.labelHelp}
            </div>
            <div className={styles.fieldContainer}>
                <input
                    id={inputId}
                    name={props.name.toString()}
                    type={getType()}
                    required={props.required}
                    autoComplete={getAutoComplete()}
                    className={styles.field}
                />
            </div>
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
}
