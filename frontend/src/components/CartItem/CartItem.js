import {ItemContainer} from "./Styles";
import  {Link} from "react-router-dom";

export default function CartItem() {
    return (
        <ItemContainer>
            <div className="image">
                <img 
                    src="https://i.pinimg.com/564x/ca/2d/89/ca2d89b13d8c61db46ad61c2f2f5ea18.jpg" 
                    alt="nome do produto" />
            </div>
            <Link to={`/product/${777}`}>
                <p>Produto 1</p>
            </Link>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <p>R$ 0,00</p>
            <button>
                <i className="fas fa-trash"></i>
            </button>
        </ItemContainer>
    )
}
