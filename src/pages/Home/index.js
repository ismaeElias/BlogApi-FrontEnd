import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { ContainerUsuario, ContainerSearch, ContainerLogo } from "./styles";
import { USUARIO } from "../../services/auth";
import Dropdown from "../../components/Dropdown";

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
  useEffect(() => {
    const User = JSON.parse(localStorage.getItem(USUARIO));
    setNome(User.nome);
  }, []);

  return (
    <>
      <Header>
        <ContainerLogo>logo</ContainerLogo>
        <ContainerSearch>search</ContainerSearch>
        <ContainerUsuario>
          <Dropdown>{nome}</Dropdown>
        </ContainerUsuario>
      </Header>
      <div>container</div>
    </>
  );
}

export default HomePage;
