import React, { useState } from "react";
import api from "../../services/api";
import { Container, Header, Main, Footer, ContainerDropdown } from "./styles";
import { FiMoreVertical } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";

function Card({ id, titulo, conteudo, criadoEm }) {
  function handlerDropdown() {
    if (disable === 0) {
      setDisable(1);
    } else {
      setDisable(0);
    }
  }

  async function handlerDeletePost(id) {
    const PostID = id;
    const UserID = JSON.parse(localStorage.getItem("@MeuBlog-Usuario"));
    await api
      .delete(`/usuarios/${UserID.id}/postagem/${PostID}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
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
            <p
              onClick={() => {
                handlerDeletePost(id);
              }}
            >
              Excluir
            </p>
          </li>
        </ContainerDropdown>
      </Header>
      <Main>
        <p>{conteudo}</p>
      </Main>
      <Footer>
        <p>Criado em: {format(Date.parse(criadoEm), "dd/MM/yyyy")}</p>
      </Footer>
    </Container>
  );
}

export default Card;
