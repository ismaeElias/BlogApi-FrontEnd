import styled from 'styled-components';

export const InputStyled = styled.input`
  background-color: white;
  font-weight: bold;
  color:  #7971ea;
  border: 1px solid white;
  border-radius: 5px;
  width: 250px;
  height: 30px;

  -webkit-box-shadow: 2px 1px 15px -2px #000000; 
  box-shadow: 2px 1px 15px -2px #000000;

  padding-left: 5px;
  &::placeholder{
    color:  #7971ea;
  }
`;