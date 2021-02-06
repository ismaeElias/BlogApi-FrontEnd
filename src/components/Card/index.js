import React, { useState } from "react";
import { Container, Header, Main, Footer, ContainerDropdown } from "./styles";
import { FiMoreVertical } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function Card({ id, titulo, conteudo, criadoEm }) {
  function handlerDropdown() {
    if (disable === 0) {
      setDisable(1);
    } else {
      setDisable(0);
    }
  }
  const [disable, setDisable] = useState(0);

  return (
    <Container key={id}>
      <Header>
        <h1> {titulo} </h1>
        <button
          onClick={() => {
            handlerDropdown();
          }}
        >
          <FiMoreVertical />
        </button>
        <ContainerDropdown isOpen={disable}>
          <li>
            <AiTwotoneEdit />
            <p>Editar</p>
          </li>
          <li>
            <FaTrashAlt />
            <p>Excluir</p>
          </li>
        </ContainerDropdown>
      </Header>
      <Main>
        <p>{conteudo}</p>
      </Main>
      <Footer>
        <p>Creado em: {criadoEm}</p>
      </Footer>
    </Container>
  );
}

export default Card;
