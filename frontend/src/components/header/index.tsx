import React from "react";
import { Container } from "./style";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Header = (props: any) => {
  if (props.returnback) {
    return (
      <Container>
        <figure>
          <img src={Logo} alt="logo-ecoleta" />
        </figure>
        <Link to="/">
          <h1><FaArrowLeft color="#34cb79" /> Voltar para home</h1>
        </Link>
      </Container>
    );
  }
  return (
    <Container>
      <figure>
        <img src={Logo} alt="logo-ecoleta" />
      </figure>
    </Container>
  );
};

export default Header;
