import {CartItem} from '../CartItem';
import {StyledCartDetail} from './styles';
const axios = require('axios');



export const CartDetail = ( {products} ) => {

    return (
        <StyledCartDetail>
            {/*products.map(product => <CartItem key={product.id}/>)*/}
        </StyledCartDetail>
    )
}

