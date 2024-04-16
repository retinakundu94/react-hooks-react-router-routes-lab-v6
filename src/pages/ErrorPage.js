import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Oops! Looks like something went wrong.</h1>
            </main>
        </>
    )
}

export default ErrorPage