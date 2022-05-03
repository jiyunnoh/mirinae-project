import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../store/user-context";
import NavbarContext from "../store/navbar-context";
import styled from "styled-components";
import logo from "../assets/icon-gnb.svg";

const HeaderContainer = styled.div`
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    // justify-content: start;
`;

const Logo = styled.img.attrs({
    src: `${logo}`
})`
`;

const UserAccountGreeting = styled.h4`
    color: #aaa;
`;

const Header = () => {
    const userCtx = useContext(UserContext);
    const navbarCtx = useContext(NavbarContext);

    return (
        <HeaderContainer>
            <IconWrapper>
                <Link to="#">
                    <Logo onClick={navbarCtx.onOpenNavbar} />
                </Link>
            </IconWrapper>
            <UserAccountGreeting>Hi, {userCtx.name}!</UserAccountGreeting>
        </HeaderContainer>
    );
};

export default Header;