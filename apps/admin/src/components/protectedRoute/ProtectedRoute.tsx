import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    const token = "token";
    return token ? <Outlet /> : <Navigate to="/" />;
}
