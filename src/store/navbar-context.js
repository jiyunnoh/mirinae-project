import React, { useState } from "react";

const NavbarContext = React.createContext({
    isClicked: false,
    onOpenNavbar: () => {}
});

export const NavbarContextProvider = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const openNavbarHandler = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <NavbarContext.Provider value={{ isClicked: isClicked, onOpenNavbar: openNavbarHandler }}>
            {props.children}
        </NavbarContext.Provider>
    );
};

export default NavbarContext;