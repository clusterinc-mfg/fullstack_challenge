import React from 'react'
import Header from '../Header/Header'
import {Container} from './Layout.styles'

type LayoutProps = {
    children: any
}

const Layout:React.FC<LayoutProps> = ({children}) => {
    return(
        <Container>
            <Header />
            {children}
        </Container>
    )
}

export default Layout