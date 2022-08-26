import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';

export const ProductDetail = ({product}) => {
    console.log(product)
    const image = product.image === '' ? "/images/camisa_1.png" : product.image;
    return (
        <>
            <S.StyledProductDetail>
                <div>
                    <Image src={image} alt={product.name} height={320} width={350} ></Image>
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <h3>Descrição do produto</h3>
                    <span>{product.description}</span>
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
                        <Link href='/checkout'>
                            <button>CHECKOUT</button>
                        </Link>
                        
                    </div>
                </div>
            </S.StyledProductDetail>
        </>
    )
}