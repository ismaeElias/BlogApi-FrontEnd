import React, { useState } from "react";
import { Container, Header, Main, Footer, ContainerDropdown } from "./styles";
import { FiMoreVertical } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";



function Card() {

  function handlerDropdown() {
    if(disable === 0){
      setDisable(1);
    } else {
      setDisable(0);
    }
  }
  const [disable, setDisable] = useState(0);

  return (
    <Container>
      <Header>
        <h1> Titulo </h1>
        <button onClick={()=>{
          handlerDropdown();
        }}>
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
        <p>Conteudo</p>
      </Main>
      <Footer>
        <p>Creado em: 22/02/2021</p>
      </Footer>
    </Container>
  );
}

export default Card;
