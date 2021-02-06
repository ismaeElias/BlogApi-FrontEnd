import React from "react";
import {
  InputStyled,
  SpanStyled,
  Container,
  Layout,
  ErrorSpan,
} from "./styles";

function Input({
  id,
  name,
  placeholder,
  type,
  valueText,
  onChangeForm,
  textLabel,
  Error
}) {
  return (
    <Layout>
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
            autoComplete="off"
          />
          <SpanStyled>{textLabel}</SpanStyled>
        </label>
        {Error ? <ErrorSpan>{Error}</ErrorSpan> : <p />}
      </Container>
    </Layout>
  );
}

export default Input;
