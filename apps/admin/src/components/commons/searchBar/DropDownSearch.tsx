import { Key, useState } from "react";
import style from "./DropDownSearch.module.css";
import { DropDownSearchList, DropDownSearchListOption } from "./DropDownSearchList";
import { DropDownSearchBar } from "./DropDownSearchBar";
import { removeAccentsAndTolowercase } from "../../../utils/StringUtils";

export function DropDownSearch<T>(props: DropDownSearchProps<T>) {
    const [openList, setOpenList] = useState<boolean>(false);

    const [filter, setFilter] = useState<string>();

    const selectItem = (item: T) => {
        props.onItemSelected(item);
        setOpenList(false);
    };

    const filterItems = (options: DropDownSearchListOption<T>[], filter: string) =>
        options.filter(option =>
            removeAccentsAndTolowercase(option.label).includes(removeAccentsAndTolowercase(filter))
        );

    const options: DropDownSearchListOption<T>[] = props.items.map(item => ({
        item,
        label: props.getLabel(item),
        key: props.getKey(item),
    }));

    const filteredOptions = filter ? filterItems(options, filter) : options;

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") {
            return;
        }

        const newElementName = e.currentTarget.value;

        props.onAddItem(newElementName);
    };

    return (
        <div className={style.mainContainer}>
            <DropDownSearchBar
                placeholder={props.placeholder}
                onClick={() => setOpenList(!openList)}
                onChange={setFilter}
            />
            <div>
                {openList && (
                    <div className={style.listItemContainer}>
                        <DropDownSearchList<T> options={filteredOptions} onItemSelected={selectItem} />

                        <input type="text" onKeyDown={onKeyDown} placeholder="Ajouter un élément" />
                    </div>
                )}
            </div>
        </div>
    );
}

export interface DropDownSearchProps<T> {
    items: T[];
    placeholder?: string;
    getLabel: (item: T) => string;
    getKey: (item: T) => Key;
    onAddItem: (name: string) => void;
    onItemSelected: (item: T) => void;
}
