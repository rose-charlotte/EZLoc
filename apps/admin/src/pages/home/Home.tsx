import { Link } from "react-router-dom";
import style from "./Home.module.css";

export function Home() {
    return (
        <>
            <h1>Je suis la Home page</h1>
            <nav className={style.nav}>
                <Link to="/">Ajouter une location</Link>
                <Link to="/">Ajouter un locataire</Link>
                <Link to="/">Liste des locations</Link>
                <Link to="/">liste des locataires</Link>
                <Link to="/">utilisateur</Link>
            </nav>
        </>
    );
}
