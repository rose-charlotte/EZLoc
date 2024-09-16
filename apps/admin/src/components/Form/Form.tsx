import { FormEvent, ReactNode } from "react";

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
        <form onSubmit={onSubmit} method="POST" className="space-y-6">
            {props.children}

            <div>
                <button type="submit">{props.submitLabel}</button>
            </div>
        </form>
    );
}

export interface FormProps<T> {
    children: ReactNode[] | ReactNode;
    submitLabel: string;
    onSubmit: (model: T) => void;
}
