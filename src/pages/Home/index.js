import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import { ContainerUsuario, ContainerSearch, ContainerLogo } from "./styles";
import { useHistory } from "react-router-dom";
import { Atualiza, ID,REFRESHTOKEN_KEY } from '../../services/auth';
import api from "../../services/api";


function HomePage() {
    const history = useHistory();

    const  handlerGetUser = useCallback( async () => {
        const id = localStorage.getItem(ID);
        await api.get(`/usuarios/${id}`).then((response) => {
                setNome(response.data.nome);  
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
    },[history])
    
  const [nome , setNome] = useState('Nome Usuario'); 
  useEffect( () => {
        handlerGetUser();
        
  }, [handlerGetUser]);

  return (
    <Header>
      <ContainerLogo>logo</ContainerLogo>
      <ContainerSearch>search</ContainerSearch>
      <ContainerUsuario>
        <h3>{nome}</h3>
      </ContainerUsuario>
    </Header>
  );
}

export default HomePage;
