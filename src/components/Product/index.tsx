import { StyledProduct } from "./styles"
import Image from "next/image"
import Link from "next/link"

export const Product = (Props) => {
    return (
        <StyledProduct>
            <Link href={`/product/details`}>
                <Image src="/images/camisa_1.png" alt="image" width={250} height={250}/>
            </Link>
            <div>
                <h2>Esse e o produto</h2>
                <h3>R$50,00</h3>
            </div>
        </StyledProduct>
    )
}