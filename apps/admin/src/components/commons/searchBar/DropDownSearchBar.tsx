import { useId } from "react";
import style from "./DropDownSearch.module.css";

import { TextField } from "@mui/material";

export function DropDownSearchBar(props: DropDownSearchBarProps) {
    const id = useId();

    return (
        <div className={style.container}>
            <TextField
                autoComplete="off"
                type="search"
                id={id}
                label={props.label}
                className={style.input}
                placeholder={props.placeholder}
                onClick={props.onClick}
                onChange={e => props.onChange(e.currentTarget.value)}
            />
        </div>
    );
}

export interface DropDownSearchBarProps {
    placeholder?: string;
    label: string;
    onClick: () => void;
    onChange: (value: string) => void;
}
