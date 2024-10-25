import { useId, useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export function SelectField(props: SelectFieldProps) {
    const selectId = useId();
    const [value, setValue] = useState<string>("");

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target!.value as string);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id={selectId}>{props.label}</InputLabel>
                <Select labelId={selectId} id={selectId} value={value} label="Age" onChange={handleChange}>
                    {props.options.map(option => (
                        <MenuItem key={option.id} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export interface SelectFieldProps {
    label: string;
    name: string;
    options: Option[];
}
export interface Option {
    name: string;
    id: string;
}
