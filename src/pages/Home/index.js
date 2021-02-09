import React, { useEffect, useState } from "react";
import { useStyle, themes } from "../../services/context";
import {
  ContainerUsuario,
  ContainerSearch,
  ContainerLogo,
  Container,
  ContainerPost,
  InputStyled,
  ContainerInput,
} from "./styles";
import api from "../../services/api";
import { USUARIO } from "../../services/auth";
import { BiSearch } from "react-icons/bi";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";
import Card from "../../components/Card";

function HomePage() {
  /* Refresh TOKEN
      const  handlerGetUser = useCallback( async () => {
        const id = localStorage.getItem(ID);
        await api.get(`/usuarios/${id}`).then((response) => {
                setNome(response.data.nome);  
                console.log(response);
        }).catch(async () => {
            await api.post('/usuarios/atualiza_token', {
                refreshToken : localStorage.getItem(REFRESHTOKEN_KEY) 
            }).then( response => {
                const id = response.data.id;
                const refreshToken = response.data.refreshToken;
                const accessToken = response.headers.authorization;
                Atualiza(accessToken,refreshToken,id);
                handlerGetUser(id);
            }).catch(() => {
                history.push("/login");
            })
        })
    },[history])*/
  const [nome, setNome] = useState("Nome Usuario");
  const { setStyle } = useStyle();
  const [postagem, setPostagens] = useState([]);

  async function handlerGetPost(id) {
    await api.get(`/usuarios/${id}/postagem`).then((response) => {
      setPostagens(response.data);
    });
  }

  function handlerOpen() {
    setStyle(themes.displayOff);
  }

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem(USUARIO));
    setNome(User.nome);
    handlerGetPost(User.id);
  }, []);

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <h3>Meu Blog</h3>
        </ContainerLogo>
        <ContainerSearch>
          <ContainerInput>
            <InputStyled placeholder="Buscar" type='search'/>
            <BiSearch color={"white"} size={28} />
          </ContainerInput>
        </ContainerSearch>
        <ContainerUsuario>
          <Dropdown>{nome}</Dropdown>
        </ContainerUsuario>
      </Header>
      <ContainerPost
        onClick={() => {
          handlerOpen();
        }}
      >
        {postagem.map(postagens => {
          return <Card
            key={postagens.id}
            id={postagens.id}
            titulo={postagens.titulo}
            conteudo={postagens.conteudo}
            criadoEm={postagens.createdAt}
          />;
        })}
        
      </ContainerPost>
    </Container>
  );
}

export default HomePage;
