import React from 'react'
import { Container } from './style'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <Container>
            <figure>
                <img src={Logo} alt="logo-ecoleta" />
            </figure>
        </Container>
    )
}

export default Header
