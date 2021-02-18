import React from "react";
import { Container } from "./styles";
import Card from "../../components/Card";
import { usePosts } from "../../services/context/PostContext";

function ContainerPost() {
  const { post } = usePosts();

  return (
    <Container>
      {post.map((postagens) => {
        return (
          <Card
            key={postagens.id}
            id={postagens.id}
            titulo={postagens.titulo}
            conteudo={postagens.conteudo}
            criadoEm={postagens.createdAt}
          />
        );
      })}
    </Container>
  );
}

export default ContainerPost;
