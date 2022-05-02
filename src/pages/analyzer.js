import { useContext } from "react";
import UserContext from "../store/user-context";

const Analyzer = () => {
    const userCtx = useContext(UserContext);
    return (
        <>
            <h1>This is Analyzer page.</h1>
            <h2>{userCtx.name}</h2>
        </>
    );
};

export default Analyzer;