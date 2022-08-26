import * as S from './styles';
import Link from 'next/link';
import Image from 'next/image';
//import { useRef } from 'react';
const axios = require('axios');


export const ProductDetail = ({product}) => {
//    const quantityRef = useRef(null);

    const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL
    const TOKEN = process.env.NEXT_PUBLIC_TOKEN


    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.

        event.preventDefault()
    
        // Get data from the form.
        const JSONdata: any = {
            quantity: event.target.quantity.value,
        }

        let url = `${BASE_API_URL}/cart/${product.id}`
        console.log(url)
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
              },
            // Body of the request is the JSON data we created above.
            data: JSONdata,
            url: url,
          }


        const products = await axios(options).then(products => {
            alert("Produto adicionado ao carrinho")
            return products
        })
    }

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

                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <label htmlFor="quantity">Quantity </label>
                                <input type="number" name="quantity" id="quantity" />
                            </fieldset>
                            <button >ADD TO CART</button>
                        </form>

                        <Link href='/checkout'>
                            <button>CHECKOUT</button>
                        </Link>

                    </div>
                </div>
            </S.StyledProductDetail>
        </>
    )
}