import {CartContainer, LeftContainer, RightContainer} from "./Styles";
import CartItem from "../../components/CartItem/CartItem"

export default function CartPage() {
    return (
        <CartContainer>
            <h2>Carrinho</h2>
            <main>
                <LeftContainer>
                    <CartItem />
                </LeftContainer>
                <RightContainer>
                    <div className="cart_info">
                        <p>Subtotal (0) items</p>
                        <p>R$0,00</p>
                    </div>
                    <div>
                        <button>Finalizar compra</button>
                    </div>
                </RightContainer>
            </main>
        </CartContainer>
    )
}
