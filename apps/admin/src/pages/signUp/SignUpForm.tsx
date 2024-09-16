import { SignUp } from "@models";
import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { postSignUp } from "../../data/userRepository";

export function SignUpForm() {
    const onSubmit = (signUp: SignUp) => {
        console.log("submit", signUp);

        postSignUp(signUp);
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
