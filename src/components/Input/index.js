import React from "react";
import { InputStyled, SpanStyled, Container } from "./styles";

function Input({ id, name, placeholder, type, valueText, onChangeForm,textLabel }) {
  return (
    <Container>
      <label>
       
        <InputStyled
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          value={valueText}
          onChange={(event) => {
            onChangeForm(event.target.value);
          }}
        />
         <SpanStyled>
          {textLabel}
        </SpanStyled>
      </label>
    </Container>
  );
}

export default Input;
