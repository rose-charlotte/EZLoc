import { useId } from "react";
import style from "./DropDownSearch.module.css";

export function DropDownSearchBar(props: DropDownSearchBarProps) {
    const id = useId();

    return (
        <div className={style.container}>
            <label htmlFor={id} className={style.label}>
                Search
            </label>
            <div className="relative">
                <div className={style.svg}>
                    <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    autoComplete="off"
                    type="search"
                    id={id}
                    className={style.input}
                    placeholder={props.placeholder}
                    onClick={props.onClick}
                    onChange={e => props.onChange(e.currentTarget.value)}
                    required
                />
                <button type="submit" className={style.button}>
                    Search
                </button>
            </div>
        </div>
    );
}

export interface DropDownSearchBarProps {
    placeholder?: string;
    onClick: () => void;
    onChange: (value: string) => void;
}
