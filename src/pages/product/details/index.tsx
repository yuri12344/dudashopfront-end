import {ProductDetail} from '../../../components/ProductDetail'

export default function ProductDetailPage(params) {
    return (
        <>
        <ProductDetail product={params}></ProductDetail>
        </>
    )
}

ProductDetailPage.getInitialProps = async ({ query }) => {
    return query
  }