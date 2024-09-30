import { Link } from "react-router-dom";
import style from "./Home.module.css";
import { SearchBar } from "../../components/commons/searchBar/SearchBar";

export function Home() {
    return (
        <>
            <h1>Je suis la Home page</h1>
            <nav className={style.nav}>
                <Link to="/signUp">Création de compte</Link>
                <Link to="/signIn">Connexion</Link>
                <Link to="/newRental">Ajouter un bien</Link>
            </nav>

            <SearchBar />
        </>
    );
}
