import { SignUpRequest } from "@models";
import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import style from "./SignUpForm.module.css";
import { Paper } from "@mui/material";

export function SignUpForm() {
    //github.com/rose-charlotte/EZLoc/issues/68
    async function postSignUp(userInfo: SignUpRequest) {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}user`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        });
        const mss = await res.json();
        console.log("la reponse du back", mss);
    }
    const onSubmit = (signUpForm: SignUpForm) => {
        const { passwordConfirm, ...otherProps } = signUpForm;
        if (signUpForm.password !== passwordConfirm) {
            alert("Votre mot de passe ne correspond pas à la confirmation du mot de passe");
            return;
        }

        const signUp: SignUpRequest = { ...otherProps };

        postSignUp(signUp);
    };
    return (
        <Paper className={style.container}>
            <Form<SignUpForm> onSubmit={onSubmit} submitLabel="Création de compte">
                <div className={style.formContainer}>
                    <FormField<SignUpForm> label="Nom" name="lastName" />
                    <FormField<SignUpForm> label="Prénom" name="firstName" />
                    <FormField<SignUpForm> label="Email" name="email" />
                    <FormField<SignUpForm> label="Mot de passe" name="password" type="password" />
                    <FormField<SignUpForm>
                        label="Confirmation du mot de passe"
                        name="passwordConfirm"
                        type="password"
                    />
                </div>
            </Form>
        </Paper>
    );
}

type SignUpForm = SignUpRequest & {
    passwordConfirm: string;
};
