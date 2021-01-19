import styled from "styled-components";

export const SpanStyled = styled.span`
  color: black;
  position: absolute;
  font-size: 12px;
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
  border-radius: 5px;

  padding-left: 10px;

  &::placeholder {
    color: #7971ea;
  }
`;

export const ErrorSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #000;
  border-bottom: 1px solid #000;
`;

export const Layout = styled.div`
  display:flex;
  flex-direction : column;
`;

export const Container = styled(Layout)`
  position: relative;
  flex-direction: column;

  & label > ${InputStyled}:focus + ${SpanStyled} {
    top: 10px;
    font-size: 0.6375rem;
  }
`;
