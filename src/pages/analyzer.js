import { useContext } from "react";
import UserContext from "../store/user-context";
import styled from "styled-components";

const Input = styled.input`
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 70%;
    height: 30px;
    border: solid 1px #ccc;
    border-radius: 20px;
    margin-top: 100px;

    &:focus {
        outline: none;
        box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
    }
`;


const Analyzer = () => {
    const userCtx = useContext(UserContext);
    return (
        <>
            <Input type="text" placeholder="Enter Korean text to analyze" />
            <h2>{userCtx.name}</h2>
        </>
    );
};

export default Analyzer;