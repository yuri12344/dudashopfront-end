import { StyledHome } from "./styles/style"
import {ProductContainer} from "../components/ProductContainer/index"
import Banner from "@src/components/Banner"
import { Product } from "@src/components/Product"
import React, { useState } from 'react';
import { GetServerSideProps } from "next";
const axios = require('axios');


export default function Home({products}) {
  return (
    <>
        {/* <Head>
            <title>DudaShop</title>
            <h1>Home Duda Shop</h1>      
            </Head> */}
        
        
        <StyledHome>
          <Banner></Banner>
          <h2>Produtos Populares</h2>
          <ProductContainer products={products} />
        </StyledHome>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let url = "http://127.0.0.1:8000/api/v1/product/"

  const products = await axios.get(url).then(products => {
    return products
  })
  return {
    props: {products: products.data}, // will be passed to the page component as props
  }
}