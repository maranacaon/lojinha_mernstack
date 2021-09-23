import styled from "styled-components";

export const HomeContainer = styled.div `
    max-width: 1300px;
    margin: 2rem auto;

    h2 {
        font-size: 1.4rem;
        color: #FA1F3D;
        margin-bottom: 1rem;
        margin-left: 15px;
    }
`

export const Products = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1232px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1115px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`