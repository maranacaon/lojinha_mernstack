import {MainContainer, RightContainer, LeftContainer } from "./Styles"

export default function ProductPage() {
    return (
        <MainContainer>
            <LeftContainer>
                <div className="image_container">
                    <img src="https://i.pinimg.com/564x/ca/2d/89/ca2d89b13d8c61db46ad61c2f2f5ea18.jpg" alt="Nome do produto"/>
                </div>
                <div className="left_info">
                    <p className="product_name">Nome do produto</p>
                    <p>Preço: R$0,00</p>
                    <p>Descrição:</p>
                </div>
            </LeftContainer>
            <RightContainer>
                <div className="right_info">
                    <p>
                        Preço: 
                        <span>R$ 0,00</span>
                    </p>
                    <p>
                        Status: 
                        <span>Em estoque</span>
                    </p> 
                    <p>
                        Quantidade:
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Adicionar ao carrinho</button>
                    </p>
                </div> 
            </RightContainer>
        </MainContainer>
    )
}
