import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { EZLocRoutes } from "../../routes";
import CottageIcon from "@mui/icons-material/Cottage";
import { useTheme } from "@mui/material";
import { Link } from "../commons/link/Link";

export function Header() {
    const theme = useTheme();
    const location = useLocation();

    const title = getTitleFromUrl(location.pathname as EZLocRoutes);
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <NavLink to="/" className={`${style.mainTitle} ${style.nav}`}>
                    <CottageIcon fontSize="large" />
                    <h1 style={theme.typography.h1}>EZLOC</h1>
                </NavLink>
                <h2 style={theme.typography.h2}>{title}</h2>
                <nav className={style.nav}>
                    <Link to="/signUp" name="Sign Up" />
                    <Link to="/signIn" name="Sign In" />
                    <Link to="/newRental" name="Ajouter un bien locatif" />
                </nav>
            </div>
        </div>
    );
}
const getTitleFromUrl = (route: EZLocRoutes) => {
    switch (route) {
        case EZLocRoutes.Index:
            return "Page d'acceuil";

        case EZLocRoutes.SignIn:
            return "Connexion";

        case EZLocRoutes.SignUp:
            return "Création de connexion";

        case EZLocRoutes.NewRental:
            return "Nouveau bien";

        default:
            return route satisfies never;
    }
};
// className={style.title}
