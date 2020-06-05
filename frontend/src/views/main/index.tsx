import React from 'react'
import Header from '../../components/header'
import { Container } from './style'
import Image from '../../assets/home-background.svg'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <section className="Informations">
                    <h1>
                        Seu marketplace <br />
                        de coleta de residuos
                    </h1>
                    <br />
                    <small>
                        Ajudamos pessoas a encontrarem pontos <br />
                        de coleta de forma eficiente
                    </small>
                    <br />
                    <br />
                    <br />
                    <Link to="/registre" type="button" className="btn">
                        <FaSignInAlt id="Icon" name="FaSignInAlt" />
                        {'  '}
                        Cadastre um ponto de coleta{' '}
                    </Link>
                </section>
                <figure className="photo">
                    <img src={Image} alt="Peoples with mind in nature " />
                </figure>
            </Container>
        </>
    )
}

export default Main
