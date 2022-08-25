import { StyledHeader } from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react';


export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <Link href="/" >
                    <Image src="/images/dudastore.png" width={200} height={60} alt="image"/>
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link href="#">
                                Cart
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <Icon icon="ant-design:search-outlined" />
                        <input placeholder='Search' type="text"/>
                    </div>
                </div>
                
            </nav>

        </StyledHeader>
    )
}
