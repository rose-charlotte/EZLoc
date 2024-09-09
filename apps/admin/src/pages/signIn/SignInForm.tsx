import { Form } from "../../components/Form/Form";
import { FormField } from "../../components/Form/FormField";
import { SignIn } from "models/SignIn";

export function SignInForm() {
    const onSubmit = (signIn: SignIn) => {
        console.log(`logged with email: ${signIn.email} and password: ${signIn.password}`);
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        EZLOC
                    </h1>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Connexion
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Pas encore membre? <a href="#">Créer votre compte</a>
                    </p>
                </div>
            </div>
        </>
    );
}
