import InputItem from "../components/InputItem";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import React, { useState } from "react";

const Analyzer = () => {
    const [isClicked, setIsClicked] = useState(false);

    const openNavbarHandler = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <>
            <Header openNavbarHandler={openNavbarHandler} />
            <Navbar isClicked={isClicked} openNavbarHandler={openNavbarHandler} />
            <InputItem />
        </>
    );
};

export default Analyzer;