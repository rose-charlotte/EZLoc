import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignInRequest } from "@models";

import { useTokenMutation } from "../../data/userApi";
import { useNavigate } from "react-router-dom";

export function SignInForm() {
    const navigate = useNavigate();
    // https://github.com/rose-charlotte/EZLoc/issues/57

    const [login, { isError }] = useTokenMutation();

    // console.log(isError);

    async function onLoginSubmit(info: SignInRequest) {
        if (!info.email || !info.password) {
            return;
        }

        try {
            await login(info).unwrap();
            navigate("/");
        } catch {
            //         // https://github.com/rose-charlotte/EZLoc/issues/73
        }
    }

    return (
        <>
            <div>
                {isError && <div>mot de passe ou identifiant invalide</div>}

                <div>
                    <Form<SignInRequest> onSubmit={onLoginSubmit} submitLabel="Connexion">
                        <FormField<SignInRequest> label="Identifiant" name="email" required type="email" />
                        <FormField<SignInRequest>
                            label="Mot de passe"
                            name="password"
                            required
                            type="password"
                            labelHelp={
                                <div>
                                    <a href="#">Mot de passe oublié?</a>
                                </div>
                            }
                        />
                    </Form>

                    <p>
                        Pas encore membre? <a href="/signUp">Créer votre compte</a>
                    </p>
                </div>
            </div>
        </>
    );
}
