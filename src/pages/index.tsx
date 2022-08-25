import Head from "next/head"
import { StyledHome, ProductContainer } from "./styles/style"
import Banner from "@src/components/Banner"
import { Product } from "@src/components/Product"


export default function Home() {
  return (
    <>
        {/* <Head>
          <title>DudaShop</title>
          <h1>Home Duda Shop</h1>      
        </Head> */}
        
        
        <StyledHome>
          <Banner></Banner>
          <h2>Produtos Populares</h2>
          <ProductContainer>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
          </ProductContainer>

        </StyledHome>
    </>
  )
}
