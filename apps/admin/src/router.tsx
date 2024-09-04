import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Page404 } from "./pages/404/Page404";
import { Home } from "./pages/home/Home";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<Page404 />}>
            <Route index element={<Home />} />
        </Route>
    )
);
