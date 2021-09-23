import styled from "styled-components"

export const CartContainer = styled.div `
    max-width: 1300px;
    display: flex;
    margin: 1rem auto;
    justify-content: center;
    flex-direction: column;

    h2 {
        margin-bottom: 1rem;
        color: #FA1F3D;
        margin-left: 1rem;
    }

    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 2rem;

        @media (max-width: 960px) {
            grid-template-rows: 2fr 1fr;
        }
    }

    p {
        padding: 8px;
    }

    @media (max-width: 1320px) {
        max-width: 1000px;
    }

    @media (max-width: 960px) {
        max-width: 900px;
    }
`

export const LeftContainer = styled.div `
    flex: 0.7;
    margin-left: 1rem;
    background: transparent;
`

export const RightContainer = styled.div `
    flex: 0.3;
    background: #fff;
    box-shadow: 0 1px 4px rgba(238, 130, 238, 0.6);
    height: fit-content;
    margin-right: 1rem;
    border-radius: 8px;

    div {
        border-bottom: 1px solid rgba(238, 130, 238, 0.6);
        padding: 1rem;
    }

    div:last-child {
        border: none;
    }

    button {
        font-size: 18px;
        border: none;
        background-color: white;
        color: #FA1F3D;
        cursor: pointer;
        padding: 10px 16px;
        width: 100%;
        padding: 10px 17px;

        :hover {
            color:#F5BB5D;
        }
    }

`
