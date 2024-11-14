import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#6c85bd",
            light: "#ECEFF7",
            dark: "#4d5f87",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#f50057",
            light: "#f73378",
            dark: "#ab003c",
            contrastText: "#ffffff",
        },
        error: {
            main: "#d22f2f",
            light: "#d85a5a",
            dark: "#932020",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ed6c02",
            light: "#f08934",
            dark: "#a54b01",
            contrastText: "#ffffff",
        },
        info: {
            main: "#0288d1",
            light: "#349fda",
            dark: "#015f92",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2e7d32",
            light: "#57975b",
            dark: "#205723",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontSize: 14,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 900,
        h1: {
            fontSize: "4rem",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            lineHeight: 1.18,
            letterSpacing: "0.03em",
            color: "#6c85bd",
        },

        h2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "2rem",
            fontWeight: 300,
            lineHeight: 1.2,
            letterSpacing: "0.03em",
            color: "#6c85bd",
        },
        h3: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "1.3 rem",
            fontWeight: 400,
            lineHeight: 1.16,
            letterSpacing: "0.01em",
            textDecoration: "none",
        },
        body1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.53,
            letterSpacing: "0.02em",
        },
        button: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "0.9rem",
            fontWeight: 500,
            lineHeight: 1.72,
            letterSpacing: "0.03em",
        },
        overline: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 2.67,
            letterSpacing: "0.07em",
        },
    },
});
