import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import { BackgroundContainer, Conteiner, Layout, Header } from "./styles";
import ButtonStyled from "../../components/Button";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";
import api from '../../services/api';

import InputStyled from "../../components/Input";

function SingIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  async function handlerApi(e){
    await api.post('/usuarios',{
      nome : nome,
      email: email,
      senha : senha
    }).then((response) => {
      console.log(response);
      history.push('/login');
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <BackgroundContainer>
      <Conteiner>
        <Layout>
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <Header>
              <Link to={"/login"}>
                <BiArrowBack />
              </Link>
            </Header>

            <form  autoComplete="off" onSubmit={(e) => {
              e.preventDefault();
              handlerApi();
              console.log({nome: nome, email : email , senha:senha});
            }}>
              <h2>Preencha as credenciais</h2>
              
                <InputStyled
                  id={"nome"}
                  name={"nome"}
                  placeholder={""}
                  type={"text"}
                  valueText={nome}
                  onChangeForm={setNome}
                  textLabel={'Nome'}
                  Error={''}
                />
              
                <InputStyled
                  id={"email"}
                  name={"email"}
                  placeholder={""}
                  type={"email"}
                  valueText={email}
                  onChangeForm={setEmail}
                  textLabel={'E-mail'}
                  Error={''}
                />
              
                <InputStyled
                  id={"senha"}
                  name={"senha"}
                  placeholder={""}
                  type={"password"}
                  valueText={senha}
                  onChangeForm={setSenha}
                  textLabel={'Senha'}
                  Error={''}
                />
              <ButtonStyled type={"submit"} id={"cadastrar"}>
                Cadastrar
              </ButtonStyled>
            </form>
          </IconContext.Provider>
        </Layout>
      </Conteiner>
    </BackgroundContainer>
  );
}

export default SingIn;
