import { StyledHome } from "./styles/style"
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

  let credentials ={
    "username": "dudashop",
    "password": "dudashop123"
  }

  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },

    // Body of the request is the JSON data we created above.
    data: credentials,
    url: url + '/login/',
  }


  const login = await axios(options).then(login => (login))
  console.log(login)

  return {
    props: {products: products.data}
  }
}