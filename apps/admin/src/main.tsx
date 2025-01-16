import "../src/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theming.ts";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
