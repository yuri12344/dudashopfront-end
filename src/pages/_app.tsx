import { AppProps } from 'next/app'
import Header from '../components/Header' 
import GlobalStyles from './styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyles />
        <Header></Header>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp

