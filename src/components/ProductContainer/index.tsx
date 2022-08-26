import { StyledProductContainer } from "./styles"
import {Product} from "../Product"

export const ProductContainer = ({products}) => {
    return (
        <StyledProductContainer>
            {products?.length && products.map((product: any) => 
            <Product key={product.id} product={product} />)
            }
        </StyledProductContainer>
    )
}



 