import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;

  height: 100%;
  width: 100%;
`;

export const Conteiner = styled.div`
  width: 400px;
  height: 600px;
  background-color: #7971ea;

  border-radius: 20px 20px 20px 20px;
  -webkit-box-shadow: 7px 8px 15px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 7px 8px 15px -4px rgba(0, 0, 0, 0.74);
  padding: 10px;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-area: "CONTAINER";

    width: 100%;
    height: 100%;

    label {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    h2 {
      color: white;
      font-weight: bold;
      margin-bottom: 50px;
    }
    p {
      color: white;
      font-weight: bold;
    }
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  grid-template-areas:
    "HEADER"
    "CONTAINER";
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  grid-area: "HEADER";
`;
