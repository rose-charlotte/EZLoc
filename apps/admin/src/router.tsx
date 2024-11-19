import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Home } from "./pages/home/Home";

import { Layout } from "./pages/layout/Layout";
import { SignUpForm } from "./pages/signUp/SignUpForm";
import { SignInForm } from "./pages/signIn/SignInForm";
import { Page404 } from "./pages/404/Page404";
import { EZLocRoutes } from "./routes";
import { NewRentalInfo } from "./pages/rentals/newRental/NewRental";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={EZLocRoutes.Index} element={<Layout />} errorElement={<Page404 />}>
            <Route index element={<Home />} />
            <Route path={EZLocRoutes.SignUp} element={<SignUpForm />} />
            <Route path={EZLocRoutes.SignIn} element={<SignInForm />} />
            <Route path={EZLocRoutes.NewRental} element={<NewRentalInfo />} />
        </Route>
    )
);
