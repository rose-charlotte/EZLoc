import { Link } from "react-router-dom";
import style from "./Home.module.css";

export function Home() {
    return (
        <>
            <h1>Je suis la Home page</h1>
            <nav className={style.nav}>
                <Link to="/addRental">Ajouter une location</Link>
                <Link to="/addTenant">Ajouter un locataire</Link>
                <Link to="/rentalList">Liste des locations</Link>
                <Link to="/tenantsList">liste des locataires</Link>
                <Link to="/user">utilisateur</Link>
            </nav>
        </>
    );
}
