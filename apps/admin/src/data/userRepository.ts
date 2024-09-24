import { SignIn, SignUp } from "@models";

export async function postSignIn(info: SignIn) {
    const response = await fetch(`${import.meta.env.VITE_API_ROUTE}user`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(info),
    });
    const mss = await response.json();
    console.log("la reponse du back", mss);
}

export async function postSignUp(userInfo: SignUp) {
    const res = await fetch(`${import.meta.env.VITE_API_ROUTE}user`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userInfo),
    });
    const mss = await res.json();
    console.log("la reponse du back", mss);
}
