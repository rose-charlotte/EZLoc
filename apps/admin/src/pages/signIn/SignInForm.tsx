import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignIn } from "@models";
import style from "./SignIn.module.css";

export function SignInForm() {
    // https://github.com/rose-charlotte/EZLoc/issues/57
    async function postInfo(info: object) {
        const response = await fetch(import.meta.env.VITE_API_ROOT + "user", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(info),
        });
        const mss = await response.json();
        console.log("la reponse du back", mss);
    }
    const onSubmit = (signIn: SignIn) => {
        postInfo(signIn);
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.titleContainer}>
                    <h1 className={style.mainTitle}>EZLOC</h1>
                    <h2 className={style.title}>Connexion</h2>
                </div>

                <div className={style.formContainer}>
                    <Form<SignIn> onSubmit={onSubmit} submitLabel="Connexion">
                        <FormField<SignIn> label="Identifiant" name="email" required type="email" />
                        <FormField<SignIn>
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
