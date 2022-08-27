import { StyledHome } from "../styles/style"
import {ProductContainer} from "../components/ProductContainer/index"
import Banner from "@src/components/Banner"
import { GetServerSideProps } from "next";
const axios = require('axios');

export default function Home({products}) {
  return (
    <>
        <StyledHome>
          <Banner></Banner>
          <h2>Produtos Populares</h2>
          <ProductContainer products={products} />
        </StyledHome>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = process.env.NEXT_PUBLIC_API_URL

  const products = await axios.get(url + '/product').then(products => {
    return products
  })


  return {
    props: {products: products.data}
  }
}