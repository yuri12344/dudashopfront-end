import { CartDetail } from "@src/components/CartDetail"
import {GetServerSideProps} from "next";
const axios = require('axios');


export default function Checkout(props){
    return (
        <>
         <CartDetail products={props.products}></CartDetail>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const url = process.env.NEXT_PUBLIC_API_URL
  
  
    const products = await axios.get(url + '/cart/').then(products => {
      return products
    })
    return {
      props: {products: products.data}, // will be passed to the page component as props
    }
  }