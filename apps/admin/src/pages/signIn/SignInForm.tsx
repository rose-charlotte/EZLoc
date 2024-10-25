import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignInErrorCode, SignInRequest, SignInResponse } from "@models";
import style from "./SignIn.module.css";
import { useState } from "react";

export function SignInForm() {
    const [errorMessage, setErrorMessage] = useState<string>();

    // https://github.com/rose-charlotte/EZLoc/issues/57

    async function login(info: SignInRequest) {
        setErrorMessage(undefined);

        const response = await fetch(`${import.meta.env.VITE_API_ROUTE}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
            credentials: "include",
        });

        const result: SignInResponse = await response.json();

        if (result.success) {
            // Add accessToken to the store
            //https://github.com/rose-charlotte/EZLoc/issues/72
            alert("ok");
        } else {
            // Create styled element to manage error message
            // https://github.com/rose-charlotte/EZLoc/issues/73
            setErrorMessage(getErrorMessage(result.errorCode));
        }
    }

    return (
        <>
            <div className={style.container}>
                {errorMessage && <div>{errorMessage}</div>}

                <div className={style.formContainer}>
                    <Form<SignInRequest> onSubmit={login} submitLabel="Connexion">
                        <FormField<SignInRequest> label="Identifiant" name="email" required type="email" />
                        <FormField<SignInRequest>
                            label="Mot de passe"
                            name="password"
                            required
                            type="password"
                            labelHelp={
                                <div className={style.p}>
                                    <a href="#">Mot de passe oublié?</a>
                                </div>
                            }
                        />
                    </Form>

                    <p className={style.p}>
                        Pas encore membre? <a href="/signUp">Créer votre compte</a>
                    </p>
                </div>
            </div>
        </>
    );
}

function getErrorMessage(errorCode: SignInErrorCode): string {
    switch (errorCode) {
        case SignInErrorCode.InvalidUsernameOrPassword:
            return "Mot de passe ou utilisateur invalide";

        default:
            return errorCode satisfies never;
    }
}
