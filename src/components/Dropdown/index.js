import React from "react";
import { Container, ContainerDD } from "./styles";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSad } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { useStyle } from "../../services/context";

function Dropdown({ children }) {

  const { styleTheme } = useStyle();

  function handlerOpen() {
    styleTheme();
  }

  return (
    <Container>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <h3 onClick={handlerOpen}>
          {children} <IoIosArrowDown />
        </h3>
        <ContainerDD>
          <a href="/Perfil">
            <FaUserAlt />
            Perfil
          </a>
          <a href="/login">
            <IoIosSad />
            Sair
          </a>
        </ContainerDD>
      </IconContext.Provider>
    </Container>
  );
}

export default Dropdown;
