import { Chip, Stack } from "@mui/material";

export function TagList(props: TagListProps) {
    return (
        <Stack direction="row" spacing={1}>
            {props.tags.map((tag, index) => (
                <Chip
                    color="primary"
                    key={index}
                    label={tag}
                    onClick={() => props.onClick && props.onClick(tag)}
                    onDelete={props.onDelete ? () => props.onDelete!(tag) : undefined}
                />
            ))}
        </Stack>
    );
}

export interface TagListProps {
    tags: string[];
    onClick?: (tag: string) => void;
    onDelete?: (tag: string) => void;
}
