import { useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { EZLocRoutes } from "../../routes";

export function Header() {
    const location = useLocation();

    const title = getTitleFromUrl(location.pathname as EZLocRoutes);
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.mainTitle}>EZLOC</h1>
                <h2 className={style.title}>{title}</h2>
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

        default:
            return route satisfies never;
    }
};
