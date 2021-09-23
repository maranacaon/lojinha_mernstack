import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const SideDrawerContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: translateX(-100%);
    transition: all 0.3s ease-out;

    ${({ show }) => 
    show &&
    css`
     transform: translateX(0);
    `}

    @media (min-width: 960px) {
        display: none;
    }
`

export const LinksContainer = styled.ul `
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;

    li {
        margin-top: 10px;
    }

    span { 
        margin-left: 5px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    i {
        margin-right: 4px;
    }

    .counter {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #FA1F3D;
        color: #f4f4f4;
        font-size: 1.3rem;
        margin-left: 8px; 
    }

`

export const StyledLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    flex: 1;
    text-decoration: none;
    color: #FA1F3D;
    font-size: 1.6rem;

    :hover {
        color: #FC4C21;
    }

    :hover .counter {
        background-color: #FC4C21;
    }
`


    