import {CartItem} from '../CartItem';
import {StyledCartDetail} from './styles';

export const CartDetail = () => {
    return (
        <StyledCartDetail>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
        </StyledCartDetail>
    )
}