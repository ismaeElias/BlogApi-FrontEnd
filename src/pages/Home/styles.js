import styled from "styled-components";

const displayFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ContainerUsuario = styled(displayFlex)`
  color: white;
`;

export const ContainerSearch = styled(displayFlex)`
  color: white;
  justify-content: center;
`;

export const ContainerLogo = styled(displayFlex)`
  color: white;
  justify-content: flex-start;

  img {
    width: 100px;
    height: 50px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerPost = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
`;

export const InputStyled = styled.input`
  background-color: rgba(227,227,227,.3);
  border-bottom: 2px solid #fff;
  color: #fff;
  border-radius: 2px 2px 0 0; 
  height: 30px;
  width: 200px;
  padding: 0px 30px 0 4px;
`;

export const ContainerInput = styled.div`
  position: relative;
  svg{
    position: absolute;
    border-radius: 0px 2px 0 0; 
    left: 172px;
    background-color: rgba(59,50,196,.7);
    z-index: 1;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  svg:hover{
    background-color: #726DC1;
    color: #D7D7D7;
  }
`;