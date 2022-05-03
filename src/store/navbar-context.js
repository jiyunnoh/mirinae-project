import React, { useState } from "react";

const NavbarContext = React.createContext({
    isClicked: false,
    onToggleNavbar: () => { },
    onCloseNavbar: () => { }
});

export const NavbarContextProvider = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleNavbarHandler = () => {
        setIsClicked(prevState => !prevState);
    };

    const closeNavbarHandler = () => {
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <NavbarContext.Provider value={{
            isClicked: isClicked,
            onToggleNavbar: toggleNavbarHandler,
            onCloseNavbar: closeNavbarHandler
        }}>
            {props.children}
        </NavbarContext.Provider>
    );
};

export default NavbarContext;