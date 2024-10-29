import { useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Link(props: LinkProps) {
    const theme = useTheme();

    return (
        <NavLink
            style={({ isActive }) => ({
                ...theme.typography.h3,
                color: isActive ? theme.palette.primary.light : theme.palette.primary.main,
            })}
            to={props.to}
        >
            {props.name}
        </NavLink>
    );
}

export interface LinkProps {
    to: string;
    name: string;
}
