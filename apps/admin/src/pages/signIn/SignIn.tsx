import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";

export function SignIn() {
    async function postData() {
        const response = await fetch("http://localhost:3000");
        const mss = await response.json();
        console.log(mss);
    }
    // const navigate = useNavigate();
    //const id = "toto@toto.fr";
    //const password = "toto";
    function handleSubmit(e: HTMLFormElement) {
        // if (!e.id || !e.password) {
        //     return alert("manque info");
        // }
        // if (e.id === id && e.password === password) {
        //     navigate("/user");
        // } else {
        //     alert("identifiant ou mot de passe invalide");
        // }

        postData();
    }
    return (
        <Form submitLabel="Submit" onSubmit={handleSubmit}>
            <FormField<signIn> label="Identifiant" name="id" required />
            <FormField<signIn> label="Mot de passe" name="password" type="password" required />
        </Form>
    );
}

export interface signIn {
    id: string;
    password: string;
}
