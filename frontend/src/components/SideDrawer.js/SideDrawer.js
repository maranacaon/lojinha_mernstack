import {SideDrawerContainer, LinksContainer, StyledLink} from "./Styles.js"

export default function SideDrawer({show, click}) {

    return (
        <SideDrawerContainer show={show}>
            <LinksContainer onClick={click}>
                <li>
                    <StyledLink to="/cart">
                        <span>
                            <i className="fas fa-shopping-cart"/>
                            Carrinho
                            <span className="counter">0</span>
                        </span>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to="/">
                        Shop
                    </StyledLink>
                </li>
            </LinksContainer>
        </SideDrawerContainer>
    )
}
