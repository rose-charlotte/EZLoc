import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";

export function SignUpForm() {
    // https://github.com/rose-charlotte/EZLoc/issues/57
    async function postUser(userInfo: SignUp) {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}user`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        });
        const mss = await res.json();
        console.log("la reponse du back", mss);
    }
    const onSubmit = (signUp: SignUp) => {
        console.log("submit", signUp);

        postUser(signUp);
    };
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form<SignUp> onSubmit={onSubmit} submitLabel="Création de compte">
                <FormField<SignUp> label="Nom" name="lastName" />
                <FormField<SignUp> label="Prénom" name="firstName" />
                <FormField<SignUp> label="Adresse" name="adress" />
                <FormField<SignUp> label="Tel" name="phone" />
                <FormField<SignUp> label="Mot de passe" name="password" />
                <FormField<SignUp> label="Confirmation du mot de passe" name="passwordConfirm" />
            </Form>
        </div>
    );
}

//A déplacer dans les models quand la PR SignIn sera passée
export interface SignUp {
    lastName: string;
    firstName: string;
    adress: string;
    phone: string;
    password: string;
    passwordConfirm: string;
}
