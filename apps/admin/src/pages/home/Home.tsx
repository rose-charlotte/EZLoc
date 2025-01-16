import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { useProfileMutation } from "../../data/userApi";
import { useEffect } from "react";

export function Home() {
    const [profile, { data, isError }] = useProfileMutation();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (!data && !isError) {
            profile().then(payload => console.log(payload));
            return;
        }

        if (isError) {
            console.log("voila le bug");
        }
    }, [user, data, isError, profile]);

    return <>{user ? <p>user name: {user.firstName}</p> : <p>aucun user</p>}</>;
}
