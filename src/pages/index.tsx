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
  const url = process.env.NEXT_PUBLIC_API_URL


  const products = await axios.get(url + '/product').then(products => {
    return products
  })



  let data ={
    "username": "yuri",
    "password": 1
  }
  const optionslogin = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Token ${process.env.NEXT_PUBLIC_TOKEN}`
    },
    url: url + '/login/',
    data
  }

  const login = await axios(optionslogin)

  return {
    props: {products: products.data}, // will be passed to the page component as props
  }
}