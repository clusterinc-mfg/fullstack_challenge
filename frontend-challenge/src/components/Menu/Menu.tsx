import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)


import {Container, Link, VerticalBar} from './Menu.styles'




const Menu = () => {
    return(
        <Container>
            <Link>John Doe</Link>
            <VerticalBar/>
            <Link>More <FontAwesomeIcon style={{color: '#888888' }} icon={ ['fas', "chevron-down"] }/> </Link>
        </Container>
    )
}

export default Menu