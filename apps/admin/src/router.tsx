import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Page404 } from "./pages/404/Page404";
import { Home } from "./pages/home/Home";
import { SignInForm } from "./pages/signIn/SignInForm";
import { Layout } from "./pages/layout/Layout";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route index element={<SignInForm />} />
            <Route path="/user" element={<Home />} />
        </>
    )
);
