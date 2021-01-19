import React, { useState } from "react";
import { BackgroundContainer, Conteiner, Layout, Header } from "./styles";
import ButtonStyled from "../../components/Button";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";

import InputStyled from "../../components/Input";

function SingIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handlerApi(e){
    
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

            <form onSubmit={(e) => {
              e.preventDefault();
              handlerApi();
              console.log({nome: nome, email : email , senha:senha});
            }}>
              <h2>Preencha as credenciais</h2>
              <label>
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
              </label>
              <label>
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
              </label>
              <label>
                <InputStyled
                  id={"senha"}
                  name={"senha"}
                  placeholder={""}
                  type={"text"}
                  valueText={senha}
                  onChangeForm={setSenha}
                  textLabel={'Senha'}
                  Error={'Preencha corretamente a senha!'}
                />
              </label>
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
