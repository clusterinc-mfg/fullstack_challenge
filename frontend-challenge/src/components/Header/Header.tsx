import React from 'react'

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import SearchBar from '../SearchBar/SearchBar'
import Menu from '../Menu/Menu'

import {Container, Title, HamburgerContainer} from './Header.styles'


const Header = () => {
    return(
        <Container>
            <HamburgerContainer>
                <HamburgerMenu />
                <Title>Affordable Online Degrees</Title>
            </HamburgerContainer>
            <SearchBar/>
            <Menu />
        </Container>
    )
}

export default Header