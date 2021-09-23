import styled from "styled-components"
import {Link} from "react-router-dom";

export const NavbarContainer = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 89px;
    background-color: #FA6E84;
    padding: 1.5rem 4rem;
    color: white;
    z-index: 50;
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.2);
`

export const LogoContainer = styled.div `
    h2 {
        color: #F5EB88;
        font-size: 2rem;
        cursor: pointer;
        font-family: 'ZCOOL KuaiLe', cursive;
        letter-spacing: 0.3rem;
    }

    @media (max-width: 500px) {
        h2 {
            font-size: 1.5rem;
        }
    }
`

export const LinksContainer = styled.ul `
    display: flex;
    list-style: none;
    align-items: center;

    li {
        padding-left: 1.5rem;
    }

    span {
        /* width: 25px;
        height: 25px;
        border-radius: 50%; */
        /* background-color: #FA6E84;    */
        margin-left: 4px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }

    @media (max-width: 960px) {
        display: none;
    }
`

export const StyledLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #F5BB5D;
    padding: 8px;
    text-decoration: none;
    color: #FA1F3D;
    font-size: 1.2rem;
`

export const HamburguerMenu = styled.div `
    width: 30px;
    height: 29px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-left: 1.5rem;

    div {
        background-color: #FA1F3D;
        height: 4px;
        width: 100%;
        border-radius: 3px;

    }

    :hover > div {
        background-color: #FA1F3D;
    }

    @media (max-width: 960px) {
        display: flex;
    }
`
// cores
// #F5BB5D
// #FA1F3D
// #FA6E84
