import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { EZLocRoutes } from "../../routes";
import CottageIcon from "@mui/icons-material/Cottage";

export function Header() {
    const location = useLocation();

    const title = getTitleFromUrl(location.pathname as EZLocRoutes);

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <NavLink to="/" className={`${style.mainTitle} ${style.nav}`}>
                    <CottageIcon fontSize="large" />
                    <h1>EZLOC</h1>
                </NavLink>
                <h2 className={style.title}>{title}</h2>
                <nav className={style.nav}>
                    <NavLink to="/signUp" className={({ isActive }) => (isActive ? style.active : style.inactive)}>
                        Sign up
                    </NavLink>
                    <NavLink to="/signIn">Sign in</NavLink>
                </nav>
            </div>
        </div>
    );
}
const getTitleFromUrl = (route: EZLocRoutes) => {
    switch (route) {
        case EZLocRoutes.Index:
            return "Acceuil";

        case EZLocRoutes.SignIn:
            return "Connexion";

        case EZLocRoutes.SignUp:
            return "Création de connexion";

        default:
            return route satisfies never;
    }
};
