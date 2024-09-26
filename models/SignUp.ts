export interface SignUp {
    lastName: string;
    firstName: string;
    //Add an interface address with all details informations
    //https://github.com/rose-charlotte/EZLoc/issues/74
    adress: string;
    phone: string;
    password: string;
    passwordConfirm: string;
}
