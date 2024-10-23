import style from "./Tag.module.css";

export function Tag(props: TagProps) {
    return (
        <div className={style.tagContainer}>
            <span>{props.name} </span>
            <button className={style.closeTag}>x</button>
        </div>
    );
}

export interface TagProps {
    name: string;
}
