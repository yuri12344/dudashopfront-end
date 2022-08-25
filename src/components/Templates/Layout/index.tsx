import Header from '../../Header'
import { RootStyle} from './styles'

export default function Layout(Props) {
    return (
        <RootStyle>
            <Header />
            <main>
                {props.children}
            </main>
        </RootStyle>
    )
}