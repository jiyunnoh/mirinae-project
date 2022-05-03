import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import close from "../assets/icon-close.svg";
import { useContext } from "react";
import NavbarContext from "../store/navbar-context";

const CloseIcon = styled.img.attrs({
    src: `${close}`
})`
    width: 10px;
    height: 10px;
`;

const NavbarContainer = styled.nav`
    width: 200px;
    height: 100vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;

    &.active {
        background-color: white;
        left: 0;
        transition: 850ms;
        box-shadow: 3px 0 15px rgb(0, 0, 0, 0.2);
        z-index: 20;
    }
`;

const ListContainer = styled.ul`
    width: 100%;
    margin: 0;
`;

const CloseIconContainer = styled.li`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
`;

const NavbarItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 30px;
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: rgb(85, 85, 85);
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-itmes: center;
    padding: 0 16px;

    &:hover {
        color: rgb(157, 205, 202);
    }

    &.active {
        color: rgb(157, 205, 202);
    }
`;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0);
`;

const data = [
    { title: "Analyzer", path: "/analyzer" },
    { title: "History", path: "/history" }
]

const Navbar = () => {
    const navbarCtx = useContext(NavbarContext);
    return (
        <>
            {navbarCtx.isClicked ? <Backdrop onClick={navbarCtx.onToggleNavbar} /> : null }
            <NavbarContainer className={navbarCtx.isClicked ? "active" : ""}>
                <ListContainer>
                    <CloseIconContainer>
                        <Link to="#">
                            <CloseIcon onClick={navbarCtx.onToggleNavbar} />
                        </Link>
                    </CloseIconContainer>
                    {data.map((item, index) => {
                        return (
                            <NavbarItem key={index}>
                                <StyledLink to={item.path} activeClassName="active" onClick={navbarCtx.onCloseNavbar}>
                                    {item.title}
                                </StyledLink>
                            </NavbarItem>
                        );
                    })}
                </ListContainer>
            </NavbarContainer>
        </>
    );
};

export default Navbar;