import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";
import { SignInForm } from "./pages/signIn/SignInForm";
import { Page404 } from "./pages/404/Page404";
import { Layout } from "./pages/layout/Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<Page404 />}>
            <Route index element={<Home />} />
            <Route path="/signIn" element={<SignInForm />} />
        </Route>
    )
);
