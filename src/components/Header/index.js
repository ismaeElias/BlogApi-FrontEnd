import React from "react";
import { HeaderStyled } from "./styles";

function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

export default Header;
