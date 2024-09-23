import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignIn } from "@models";
import style from "./SignIn.module.css";
import { postSignIn } from "../../data/userRepository";

export function SignInForm() {
    const onSubmit = (signIn: SignIn) => {
        postSignIn(signIn);
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
