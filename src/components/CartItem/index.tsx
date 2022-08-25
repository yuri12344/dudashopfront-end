import { Icon } from "@iconify/react"
import Image from "next/image"
import {StyledCartItem} from "./styles"

export const CartItem = () => {
    return (
        <>
            <StyledCartItem>
                <div>
                    <Image src="/images/camisa_1.png" alt="Product 1" width={150} height={150} />
                </div>
                <div>
                    <h2>TShirt</h2>
                </div>
                <div>
                    <h3>Unit Price</h3>
                    <h4>112,15</h4>
                </div>
                <div>
                    <input type="number" />
                </div>
                <div>
                    <h2>Total</h2>
                </div>
                <div>
                    <Icon icon={"ep:close-bold"}></Icon>
                </div>
            </StyledCartItem>
        </>
    )
}