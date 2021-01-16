import React from "react";
import { ButtonStyled } from "./styles";

function Button({ children, type, id }) {
  return <ButtonStyled type={type} id={id}>{children}</ButtonStyled>;
}

export default Button;
