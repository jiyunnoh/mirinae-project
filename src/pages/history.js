import { useContext } from "react";
import UserContext from "../store/user-context";

const History = () => {
    const userCtx = useContext(UserContext);
    return (
        <>
        <h1>This is History page.</h1>
        <h2>{userCtx.name}</h2>
    </>
    );
};

export default History;