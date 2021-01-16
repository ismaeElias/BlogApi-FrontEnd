import React from "react";
import { InputStyled } from "./styles";

function Input({id, name, placeholder,type}) {
  return <InputStyled id={id} name={name} placeholder={placeholder} type={type}/>;
}

export default Input;
