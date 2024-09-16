import { Link } from "react-router-dom";
import style from "./Home.module.css";

export function Home() {
    return (
        <>
            <h1>Je suis la Home page</h1>
            <nav className={style.nav}>
                <Link to="/signIn">connexion</Link>
            </nav>
        </>
    );
}
