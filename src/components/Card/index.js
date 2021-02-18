import React, { useState } from "react";
import { Container, Header, Main, Footer, ContainerDropdown } from "./styles";
import { FiMoreVertical } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import { usePosts } from "../../services/context/PostContext";

function Card({ id, titulo, conteudo, criadoEm }) {
  const {deletaPost} =  usePosts();
  
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
    deletaPost(UserID.id, PostID);
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
