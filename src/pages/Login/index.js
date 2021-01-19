import React, { useState } from "react";
import {
  BackgroundMain,
  Conteiner,
  Logo,
  Login,
  Title,
  InputStyled,
  LinkStyled,
  TextSingUp,
  Developed,
} from "./styles";
import LogoMeuBlog from "../../assets/logoMeuBlog.png";
import Button from "../../components/Button";
import api from "../../services/api";
import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IconContext } from "react-icons";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  async function handlerApi() {
    try {
      await api
        .post("/login", {
          email: email,
          senha: senha,
        })
        .then((response) => {
          const accessToken = response.headers.authorization;
          const refreshToken = response.data.refreshToken;
          if (accessToken) {
            login(accessToken, refreshToken);
            history.push("/home");
          }
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
            <TextSingUp>
              Não possui acesso?{" "}
              <LinkStyled to={"/SingIn"}>Cadastre-se</LinkStyled>
            </TextSingUp>
          </Login>
        </IconContext.Provider>
      </Conteiner>
      <Developed>Developed by - <a target="_blank" href="https://github.com/ismaeElias">Ismael Elias</a> &#128151;</Developed>
    </BackgroundMain>
  );
}

export default LoginPage;
