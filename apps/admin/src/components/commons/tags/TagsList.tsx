import { Tag } from "./Tag";
import style from "./Tag.module.css";

export function TagsList(props: TagsListProps) {
    return (
        <div className={style.tagsListContainer}>
            {props.tags.map((tag, index) => (
                <Tag key={index} name={tag} />
            ))}
        </div>
    );
}

export interface TagsListProps {
    tags: string[];
}
