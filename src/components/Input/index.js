import React from "react";
import { InputStyled } from "./styles";

function Input({ id, name, placeholder, type, valueText , onChangeForm }) {
  return (
    <InputStyled id={id} name={name} placeholder={placeholder} type={type} value={valueText}
    onChange={(event) => {
      onChangeForm(event.target.value);
    }} />
  );
}

export default Input;
