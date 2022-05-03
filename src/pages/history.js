import HistoryItems from "../components/HistoryItems";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledH3 = styled.h3`
    margin-left: 3rem;
    margin-bottom: 3rem;
`;

const History = () => {
    return (
        <>
            <Header />
            <Navbar />
            <StyledH3>Exploration history</StyledH3>
            <HistoryItems />
        </>
    );
};

export default History;