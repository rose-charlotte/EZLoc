import { useLocation } from "react-router-dom";
import style from "./Header.module.css";

export function Header() {
    const location = useLocation();

    const title = getTitleFromUrl(location.pathname);
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h1 className={style.mainTitle}>EZLOC</h1>
                <h2 className={style.title}>{title}</h2>
            </div>
        </div>
    );
}
const getTitleFromUrl = (url: string) => {
    switch (url) {
        case "/":
            return "Page d'acceuil";

        case "/signIn":
            return "Connexion";

        case "/signUp":
            return "Création de connexion";

        default:
            throw new Error("Page not found");
    }
};
