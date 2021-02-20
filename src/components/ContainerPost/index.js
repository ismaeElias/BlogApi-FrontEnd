import React, { useEffect } from "react";
import { Container } from "./styles";
import Card from "../../components/Card";
import { usePosts } from "../../services/context/PostContext";
import api from '../../services/api';

function ContainerPost({ IdUser }) {
  const { post, setPost } = usePosts();

  useEffect(()=> {
    api.get(`/usuarios/${IdUser}/postagem`).then((response) => {
      setPost(response.data);
     })
  },[IdUser,setPost]);

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
