import styled from "styled-components";

export const ItemContainer = styled.div `
    width: 100%;
    padding: 1rem 2rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 4rem;
    background-color: #fff;
    place-items: center;
    box-shadow: 0 1px 4px rgba(238, 130, 238, 0.6);
    margin-right: 1rem;
    border-radius: 8px;

    p {
        font-size: 20px;
    }

    img {
        max-height: 100px;
        border-radius: 8px;
    }

    a {
        text-decoration: none;
        color: #FA1F3D;
        background-color: #fff;

        :hover {
            color: orange;
        }

        @media (max-width: 700px) {
            font-size: 0.8rem;
        }
    }

    select {
        padding: 10px 17px;
        border: 1px solid #FA6E84;
        color: #FA6E84;
        font-size: 16px;
        border-radius: 8px;

        @media (max-width: 700px) {
            padding: 8px 13px;
        }
    }

    button {
        padding: 10px 12px;
        color: #FA1F3D;
        background-color: none;
        border: none;
        border-radius: 70px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        font-size: 21px;

        :hover, :active, :focus{
            background-color: #F5BB5D;
            transform: scale(1.1);
        }
    }

    @media (max-width: 1125px) {
        a, p {
            font-size: 15px;
        }
    }

    @media (max-width: 1070px) {
        a, p {
            font-size: 12px;
        }
}

    @media (max-width: 975px) {
        flex-direction: column;
        gap: 2px;
    }
`