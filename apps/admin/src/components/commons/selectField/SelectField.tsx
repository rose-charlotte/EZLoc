import { useId, useState } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export function SelectField(props: SelectFieldProps) {
    const selectId = useId();
    const [value, setValue] = useState<string>("");

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target!.value as string);
    };

    return (
        <Box>
            <FormControl sx={{ width: 210 }}>
                <InputLabel id={selectId}>{props.label}</InputLabel>
                <Select labelId={selectId} name={props.name} id={selectId} value={value} onChange={handleChange}>
                    {props.options.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
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
    label: string;
    value: string;
}
