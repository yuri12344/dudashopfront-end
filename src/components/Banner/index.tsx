import Image from 'next/image'
import { StyledBanner } from './styles'

export default function Banner() {
    return (
        <StyledBanner>
            <Image src="/images/banner_home.png" width={1000} height={280} alt="baner" />
        </StyledBanner>
    )
}