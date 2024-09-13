import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Header() {
    const [title, setTitle] = useState("");
    const location = useLocation();
    const locatedPage = location.pathname;

    useEffect(() => {
        switch (locatedPage) {
            case "/":
                setTitle("connexion");
                break;
            case "/location":
                setTitle("location");
                break;
            case "/locataire":
                setTitle("locataire");
                break;
            default:
                setTitle("");
        }
    }, [locatedPage]);

    console.log(location.pathname);
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">EZLOC</h1>
                {locatedPage && (
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {title}
                    </h2>
                )}
            </div>
        </div>
    );
}
