import { useContext } from "react";
import UserContext from "../store/user-context";

const UserAccount = () => {
    const userCtx = useContext(UserContext);

    return (
        <h2>Hi, {userCtx.name}!</h2>
    );
};

export default UserAccount;