import { ProductContainer, ProductInfo } from "./Styles"
import {Link} from "react-router-dom";

export default function ProductCard() {
    return (
        <ProductContainer>
            <img 
                src="https://i.pinimg.com/564x/ca/2d/89/ca2d89b13d8c61db46ad61c2f2f5ea18.jpg" 
                alt="almofada de sol"
            />
            <ProductInfo>
                <p className="product_name">Almofada sol feliz</p>
                <p className="product_description">
                Linda almofada para iluminar o seu dia! :) 
                </p>
                <p className="product_price">R$5,00</p>
                <Link to={`/product/${1111}`}>Ver produto</Link>
            </ProductInfo>
        </ProductContainer>
    )
}
