import HistoryItems from "../components/HistoryItems";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
    margin-left: 3rem;
    margin-bottom: 3rem;
`;

const History = () => {
    const [isClicked, setIsClicked] = useState(false);

    const openNavbarHandler = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <>
            <Header openNavbarHandler={openNavbarHandler} />
            <Navbar isClicked={isClicked} openNavbarHandler={openNavbarHandler} />
            <StyledH3>Exploration history</StyledH3>
            <HistoryItems />
        </>
    );
};

export default History;