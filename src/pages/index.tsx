import Head from "next/head"
import { StyledHome } from "./styles/style"
import Banner from "@src/components/Banner"


export default function Home() {
  return (
    <>
        {/* <Head>
          <title>DudaShop</title>
          <h1>Home Duda Shop</h1>      
        </Head> */}
        
        
        <StyledHome>
          <Banner></Banner>
        </StyledHome>
    </>
  )
}
