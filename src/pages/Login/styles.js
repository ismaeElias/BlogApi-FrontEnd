import styled from "styled-components";
import { Link } from 'react-router-dom';


export const BackgroundMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;

  height: 100%;
  width: 100%;
`;

export const Conteiner = styled.div`
  width: 760px;
  height: 510px;

  border-radius: 20px 20px 20px 20px;
  -webkit-box-shadow: 7px 8px 15px -4px rgba(0, 0, 0, 0.74);
  box-shadow: 7px 8px 15px -4px rgba(0, 0, 0, 0.74);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "LOGO LOGIN";
`;

export const Logo = styled.section`
  align-items: center;
  display: flex;
  background-color: #fff;
  border-radius: 20px 0px 0px 20px;
  grid-area: "LOGO";
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Login = styled.aside`
  grid-area: "LOGIN";
  width: 100%;
  height: 100%;
  background-color: #7971ea;
  border-radius: 0px 20px 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 36px;
  padding-bottom: 50px;
`;

export const InputStyled = styled.input`
  background-color: transparent;
  font-weight: bold;
  width: 200px;
  color: white;
  border-bottom: 1px solid white;
  margin-bottom: 25px;
  margin-left: 15px;

  &::placeholder {
    color: white;
  }

  &:nth-child(2) {
    margin-bottom: 30px;
  }

`;

export const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export const TextSingUp = styled.p`
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-top: 15px;
`;


export const Developed = styled.h3`
  position: absolute;
  bottom : 0px;
  color: #7971ea;
  font-size: 13px;
`;