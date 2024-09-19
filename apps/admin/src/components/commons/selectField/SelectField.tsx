import { useId } from "react";
import style from "./SelectField.module.css";

export function SelectField(props: SelectFieldProps) {
    const selectId = useId();
    return (
        <>
            <div className={style.labelContainer}>
                <label htmlFor={selectId} className={style.label}>
                    {props.label}
                </label>
            </div>
            <div className={style.fieldContainer}>
                <select id={selectId} name={props.name} className={style.select}>
                    {props.options.map(option => {
                        return <option key={option.id}>{option.name}</option>;
                    })}
                </select>
            </div>
        </>
    );
}

export interface SelectFieldProps {
    label: string;
    name: string;
    options: Option[];
}
export interface Option {
    name: string;
    id: string;
}
