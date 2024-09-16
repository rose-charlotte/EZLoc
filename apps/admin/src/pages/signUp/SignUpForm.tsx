import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";

export function SignUpForm() {
    //A remettre en parametre quand PR .env sera acceptée
    async function postUser(userInfo: object) {
        const res = await fetch(`${import.meta.env.VITE_API_ROUTE}/user`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(userInfo),
        });
        const mss = await res.json();
        console.log("la reponse du back", mss);
    }
    const onSubmit = (signUp: SignUp) => {
        console.log("submit", signUp);

        postUser({
            lastName: signUp.lastName,
            firstName: signUp.firstName,
            adress: signUp.adress,
            phone: signUp.phone,
            password: signUp.passWord,
            passWordConfirm: signUp.passWordConfirm,
        });
    };
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form<SignUp> onSubmit={onSubmit} submitLabel="Création de compte">
                <FormField<SignUp> label="Nom" name="lastName" />
                <FormField<SignUp> label="Prénom" name="firstName" />
                <FormField<SignUp> label="Adresse" name="adress" />
                <FormField<SignUp> label="Tel" name="phone" />
                <FormField<SignUp> label="Mot de passe" name="passWord" />
                <FormField<SignUp> label="Confirmation du mot de passe" name="passWordConfirm" />
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
    passWord: string;
    passWordConfirm: string;
}
