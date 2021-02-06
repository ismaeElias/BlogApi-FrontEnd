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
    width: 80px;
    height: 40px;
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
