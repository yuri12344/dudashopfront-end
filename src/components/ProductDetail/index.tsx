import * as S from './styles';

export const ProductDetail = () => {
    return (
        <>
            <S.StyledProductDetail>
                <div></div>
                <div>
                    <h1>Camisa Anry Birds</h1>
                    <h3>Descrição do produto</h3>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nobis iure, molestias aspernatur eum nemo voluptatem voluptas consequatur hic reiciendis perferendis modi quis fugit totam dolores, ducimus perspiciatis in cum.</span>
                    <div>
                        <fieldset>
                            <label htmlFor="size">Size</label>
                            <select name="size" id="">
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                            </select>
                            <label htmlFor="quauantity">Quantity</label>
                            <input type="number" name="quantity" id="" />
                        </fieldset>
                        <button>ADD TO CART</button>
                        
                    </div>
                </div>
            </S.StyledProductDetail>
        </>
    )
}