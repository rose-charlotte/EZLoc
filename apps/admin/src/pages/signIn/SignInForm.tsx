import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignInRequest } from "@models";
import style from "./SignIn.module.css";

export function SignInForm() {
    // https://github.com/rose-charlotte/EZLoc/issues/57

    async function loggin(info: object) {
        const response = await fetch(`${import.meta.env.VITE_API_ROUTE}loggin`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(info),
        });
        const mss = await response.json();
        console.log("la reponse du back", mss);
    }

    const onSubmit = (signIn: SignInRequest) => {
        console.log("submit", signIn);

        loggin(signIn);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.titleContainer}>
                    <h1 className={style.mainTitle}>EZLOC</h1>
                    <h2 className={style.title}>Connexion</h2>
                </div>

                <div className={style.formContainer}>
                    <Form<SignInRequest> onSubmit={onSubmit} submitLabel="Connexion">
                        <FormField<SignInRequest> label="Identifiant" name="email" required type="email" />
                        <FormField<SignInRequest>
                            label="Mot de passe"
                            name="password"
                            required
                            type="password"
                            labelHelp={
                                <div className="text-sm">
                                    <a href="#">Mot de passe oublié?</a>
                                </div>
                            }
                        />
                    </Form>

                    <p className={style.p}>
                        Pas encore membre? <a href="#">Créer votre compte</a>
                    </p>
                </div>
            </div>
        </>
    );
}
