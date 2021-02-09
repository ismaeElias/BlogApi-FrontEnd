import React from "react";
import { logout } from "../../services/auth";

import { Link } from "react-router-dom";
import { Container, ContainerDD,ArrowStyled } from "./styles";
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

  async function handlerLogout() {
    await logout();
  }

  return (
    <Container>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <h3 onClick={handlerOpen}>
          {children} <IoIosArrowDown />
        </h3>
        <ContainerDD>
          <ArrowStyled/>
          <Link to="/Perfil">
            <FaUserAlt />
            Perfil
          </Link>
          <Link to='/login'
            onClick={() => {
              handlerOpen();
              handlerLogout();
            }}
          >
            <IoIosSad />
            Sair
          </Link>
        </ContainerDD>
      </IconContext.Provider>
    </Container>
  );
}

export default Dropdown;
