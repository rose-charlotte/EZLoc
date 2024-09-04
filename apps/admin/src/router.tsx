import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Page404 } from "./pages/404/Page404";
import { Home } from "./pages/home/Home";
import { AddRentals } from "./pages/addRental/AddRental";
import { AddTenants } from "./pages/addTenant/AddTenants";
import { RentalList } from "./pages/rentalList/RentalList";
import { TenantsList } from "./pages/tenantsList/TenantsList";
import { User } from "./pages/user/User";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<Page404 />}>
            <Route index element={<Home />} />
            <Route path="/addRental" element={<AddRentals />} />
            <Route path="/addTenant" element={<AddTenants />} />
            <Route path="/rentalList" element={<RentalList />} />
            <Route path="/tenantsList" element={<TenantsList />} />
            <Route path="/user" element={<User />} />
        </Route>
    )
);
