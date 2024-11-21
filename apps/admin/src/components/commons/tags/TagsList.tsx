import { Chip, Stack } from "@mui/material";

export function TagList(props: TagListProps) {
    return (
        <Stack direction="row" spacing={1}>
            {props.tags.map((tag, index) => (
                <Chip
                    color="primary"
                    key={index}
                    label={tag}
                    onClick={props.handleClick}
                    onDelete={props.handleDelete}
                />
            ))}
        </Stack>
    );
}

export interface TagListProps {
    tags: string[];
    handleClick: () => void;
    handleDelete: () => void;
}
