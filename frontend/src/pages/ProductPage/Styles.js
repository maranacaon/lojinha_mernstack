import styled from "styled-components";

export const MainContainer =styled.div `
    max-width: 1300px; 
    margin: 1rem auto;
    display: flex;

    p {
        padding: 1rem;
        border-bottom: 1px solid rgba(238, 130, 238, 0.6);
    }

    @media (max-width: 960px) {
        flex-direction: column;
    }

`

export const LeftContainer =styled.div `
    display: flex;
    flex: 0.8;

    .image_container {
        margin: 1rem;
        flex: 0.5;

        img {
            border-radius: 8px;
        }

        @media (max-width: 960px) {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-width: 500px;
            }

        }
    }
    
    .left_info {
        margin: 1rem;
        flex: 0.5;
        background-color: #fff;
        height: fit-content;
        font-size: 0.9rem;
        box-shadow: 0 1px 4px rgba(238, 130, 238, 0.6);
        border-radius: 8px;

        .product_name {
            font-weight: bold;
            font-size: 1.rem;
        } 

        p:last-child {
            border:none;
        }

        @media (max-width: 960px) {
            flex: 1;
        }
    }

    @media (max-width: 960px) {
        flex-direction: column;
        flex: 1;
    }
`

export const RightContainer =styled.div `
    flex: 0.2;

    .right_info {
        width: 250px;
        margin: 1rem;
        background: #fff;
        box-shadow: 0 1px 4px rgba(238, 130, 238, 0.6);
        border-radius: 8px;

        p {
            font-size: 0.8rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        p:last-child {
            border:none;
        }

        select {
            padding: 10px 16px;
            border: 1px solid #FA6E84;
            color: #FA6E84;
            font-size: 16px;
            border-radius: 8px;
        }

        button {
            text-align: center;
            font-size: 18px;
            grid-column: 1/-1;
            border: none;
            background-color: white;
            color: #FA1F3D;
            cursor: pointer;
            padding: 10px 16px;
        }

        @media (max-width: 960px) {
            width: 100%;
            margin: 0;
        }
    }

    @media (max-width: 960px) {
        flex: 1;
        padding: 1rem;
    }
`



