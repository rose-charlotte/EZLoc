import { Chip, Stack } from "@mui/material";

export function TagsList(props: TagsListProps) {
    const handleClick = () => {
        console.log("je clique");
    };
    const handleDelete = () => {
        console.log("je delete");
    };
    return (
        <Stack direction="row" spacing={1}>
            {props.tags.map((tag, index) => (
                <Chip color="primary" key={index} label={tag} onClick={handleClick} onDelete={handleDelete} />
            ))}
        </Stack>
    );
}

export interface TagsListProps {
    tags: string[];
}
