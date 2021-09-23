import styled from "styled-components";

export const ProductContainer = styled.div `
    width: 300px;
    padding: 1rem;
    background-color:#F5C683 ;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    margin: 8px auto;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;

    img {
        /* max-height: 170px; */
        width: 250px;
        border-radius: 50%;
        margin: 0 auto;
    }

    @media (max-width: 1232px) {
        width: 360px;
    }

    /* @media (max-width: 1115px) {
        width: 330px;
    }

    @media (max-width: 1028px) {
        width: 300px;
    } */

    @media (max-width: 1115px) {
        width: 400px;
    }

    @media (max-width: 830px) {
        width: 330px;
    }

    @media (max-width: 750px) {
        width: 400px;
    }

    @media (max-width: 500px) {
        width: 350px;
    }

    @media (max-width: 400px) {
        width: 300px;
    }
`

export const ProductInfo = styled.div `
    p {
        margin-bottom: 8px;
    }
    
    .product_name {
        font-size: 1rem;
        overflow: hidden;
        margin-top: 0.5rem;
    }

    .product_description {
        font-size: 0.8rem;
    }

    .product_price {
        font-weight: bold;
    }

    a {
        display: block;
        width: 100%;
        text-decoration: none;
        text-align: center;
        color: #FA1F3D;
        border: 1px solid #FA1F3D;
        padding: 8px 16px;
        border-radius: 8px;

        :hover {
            background-color: #FA1F3D;
            color: #F5BB5D;
        }
    }
`