import styled from "styled-components";

const Input = styled.input`
    display: block;
    margin: 0 auto;
    font-size: 1rem;
    text-align: center;
    width: 70%;
    height: 30px;
    border: solid 1px #ccc;
    border-radius: 20px;
    margin-top: 15rem;
    padding: 0.2rem 0;

    &:focus {
        outline: none;
        box-shadow: 3px 3px 15px rgb(0, 0, 0, 0.1);
    }

    &::placeholder {
        color: #aaa;
    }
`;

const InputItem = () => {
    return (
        <Input type="text" placeholder="Enter Korean text to analyze" />
    );
};

export default InputItem;