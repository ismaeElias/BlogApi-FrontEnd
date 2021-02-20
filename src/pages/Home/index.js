import React, { useEffect, useState } from "react";
import { useStyle, themes } from "../../services/context";
import {
  ContainerUsuario,
  ContainerSearch,
  ContainerLogo,
  Container,
  InputStyled,
  ContainerInput,
  Button,
} from "./styles";
import { USUARIO } from "../../services/auth";
import { BiSearch } from "react-icons/bi";
import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";
import ContainerPost from "../../components/ContainerPost";
import { usePosts } from "../../services/context/PostContext";
import Modal from "../../components/Modal";

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
  const { post } = usePosts();
  const User = JSON.parse(localStorage.getItem(USUARIO));

  function handlerOpen() {
    setStyle(themes.displayOff);
  }

  useEffect(() => {
    setNome(User.nome);
  }, [User.nome, post]);

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <h3>Meu Blog</h3>
        </ContainerLogo>
        <ContainerSearch>
          <ContainerInput>
            <InputStyled placeholder="Buscar" type="search" />
            <BiSearch color={"white"} size={28} />
          </ContainerInput>
        </ContainerSearch>
        <ContainerUsuario>
          <Button>Nova postagem</Button>
          <Dropdown>{nome}</Dropdown>
        </ContainerUsuario>
      </Header>
      <ContainerPost
        onClick={() => {
          handlerOpen();
        }}
        IdUser={User.id}
      />
      <Modal/>
    </Container>
  );
}

export default HomePage;
