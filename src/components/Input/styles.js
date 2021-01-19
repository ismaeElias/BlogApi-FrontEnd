import styled from "styled-components";

export const SpanStyled = styled.span`
  color: black;
  position: absolute;
  font-weight: bold;
  top: 13px;
  left: 10px;
  transition: top 0.2s;
`;
export const InputStyled = styled.input`
  background-color: white;
  font-weight: bold;
  color: #7971ea;
  border: 1px solid white;
  width: 300px;
  height: 40px;
  -webkit-box-shadow: 2px 1px 15px -2px #000000;
  box-shadow: 2px 1px 15px -2px #000000;

  padding-left: 10px;

  &::placeholder {
    color: #7971ea;
  }
`;

export const Container = styled.div`
  position: relative;

  & label > ${InputStyled}:focus + ${SpanStyled} {
    top: 0;
    font-size: 0.8375rem;
  }
`;
