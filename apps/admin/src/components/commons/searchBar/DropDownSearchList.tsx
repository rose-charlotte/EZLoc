import { Key, ReactNode } from "react";
import style from "./DropDownSearch.module.css";
import { useTheme } from "@mui/material";

export function DropDownSearchList<T>(props: DropDownSearchListProps<T>): ReactNode {
    const theme = useTheme();
    return (
        <ul>
            {props.options.map(option => (
                <li
                    className={style.li}
                    style={{ color: theme.palette.primary.main }}
                    key={option.key}
                    onClick={() => props.onItemSelected(option.item)}
                >
                    {option.label}
                </li>
            ))}
        </ul>
    );
}

export interface DropDownSearchListProps<T> {
    options: DropDownSearchListOption<T>[];
    onItemSelected: (selectedItem: T) => void;
}

export interface DropDownSearchListOption<T> {
    item: T;
    key: Key;
    label: string;
}
