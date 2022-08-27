import { StyledProduct } from "./styles"
import Image from "next/image"
import Link from "next/link"
import {ProductDetail} from "../ProductDetail"



export const Product = ({product}) => {
    const {id, name, price, image} = product

    return (
        <StyledProduct>
            <Link href={{
                pathname: '/product/details',
                query: product
            }} >
                <Image src={ `${image ?? "/images/camisa_1.png"}` } alt="image" width={250} height={250}/>
            </Link>
            <div>
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
        </StyledProduct>
    )
}