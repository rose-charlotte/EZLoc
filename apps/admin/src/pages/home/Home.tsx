import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { useProfileMutation } from "../../data/userApi";
import { useEffect } from "react";

export function Home() {
    const [profile, { data, isError }] = useProfileMutation();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (!data && !isError) {
            profile();
            return;
        }

        //Faire la gestion d'erreur
        //https://github.com/rose-charlotte/EZLoc/issues/111
    }, [user, data, isError, profile]);

    return <>{user ? <p>user name: {user.firstName}</p> : <p>aucun user</p>}</>;
}
