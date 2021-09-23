import ProductCard from "../../components/ProductCard/ProductCard";
import {HomeContainer, Products} from "./Styles";

export default function Home() {
    return (
        <HomeContainer>
            <h2>Últimos produtos</h2>
            <Products>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Products>
        </HomeContainer>
    )
}
