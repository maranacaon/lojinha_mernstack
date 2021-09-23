import {NavbarContainer, LogoContainer, HamburguerMenu, LinksContainer, StyledLink} from "./Styles";

export default function Navbar({click}) {
    return (
        <NavbarContainer>
            <LogoContainer>
                <h2>Lojinha</h2>
            </LogoContainer>
            <LinksContainer>
                <li>
                    <StyledLink to="/cart">
                        <i className="fas fa-shopping-cart"/>
                        <span>0</span>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/">
                        Comprar
                    </StyledLink>
                </li>
            </LinksContainer>
            <HamburguerMenu onClick={click}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </HamburguerMenu>
        </NavbarContainer>
    );
}
