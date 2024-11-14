import { Box, Button } from "@mui/material";
import { FormEvent, ReactNode } from "react";
import style from "./FormField.module.css";

export function Form<T>(props: FormProps<T>): ReactNode {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);

        const element = {};

        for (const entry of data.entries()) {
            Object.defineProperty(element, entry[0], {
                enumerable: true,
                value: entry[1],
                writable: true,
            });
        }

        props.onSubmit(element as T);
    };

    return (
        <Box component="form" onSubmit={onSubmit} method="POST">
            {props.children}

            <div className={style.btn}>
                <Button variant="contained" type="submit">
                    {props.submitLabel}
                </Button>
            </div>
        </Box>
    );
}

export interface FormProps<T> {
    children: ReactNode[] | ReactNode;
    submitLabel: string;
    onSubmit: (model: T) => void;
}
