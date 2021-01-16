import React, { useState } from "react";
import {
  BackgroundMain,
  Conteiner,
  Logo,
  Login,
  Title,
  InputStyled,
} from "./styles";
import { IconContext } from "react-icons";

import LogoMeuBlog from "../../assets/logoMeuBlog.png";
import Button from "../../components/Button";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import api from '../../services/api';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  
  async function handlerApi() {
    
    try {
      await api
        .post("/login", {
          email: email,
          senha: senha
        })
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <BackgroundMain>
      <Conteiner>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <Logo>
            <img src={LogoMeuBlog} alt="Logo meu blog" />
          </Logo>
          <Login>
            <Title>LOGIN</Title>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log({ email: email, senha: senha });
                handlerApi();
              }}
              autoComplete="off"
            >
              <label>
                <FaUserCircle />
                <InputStyled
                  id="login"
                  name="login"
                  placeholder="Insira seu e-mail..."
                  type="email"
                  defaultValue={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </label>
              <label>
                <RiLockPasswordFill />
                <InputStyled
                  id="senha"
                  name="senha"
                  placeholder="Insira sua senha..."
                  type="password"
                  defaultValue={senha}
                  onChange={(event) => {
                    setSenha(event.target.value);
                  }}
                />
              </label>

              <Button type="submit" id="submit">
                ACESSAR
              </Button>
            </form>
          </Login>
        </IconContext.Provider>
      </Conteiner>
    </BackgroundMain>
  );
}

export default LoginPage;
