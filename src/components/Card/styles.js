import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 250px;
  height: 150px;
  border: 1px solid #d5d5d5;
  background-color: #f0f0f0;
  margin: 5px;
  border-radius: 5px;
  position: relative;
  
`;


export const ContainerDropdown = styled.ul`
  display: 'block';
  opacity: ${props => props.isOpen};
  position: absolute;
  background-color: #9f9f9f;
  width: 70px;
  left: 170px;
  top: 35px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  transition: 0.3s all ease-in-out;

  li {
    
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    font-size: 13px;
    padding: 1px 2px;
    color: #fff;
    transition: 0.3s all ease-in-out;

    p {
      margin-left: 10px;
      cursor:default;
    }
  }

  li:nth-child(1) {
    border-bottom: 1px solid #bdbdbd;
  }

  li:hover {
    background-color: #797979;
  }
  
`;


export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: #313131;
  border-bottom: 1px solid #d5d5d5;
  

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 30px;
    height: 25px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
    transition: 0.5s all ease-in-out;
  }
  button:hover {
    background: #9f9f9f;
    color: white;
  }
`;

export const Main = styled.main`
  height: 60%;
  border-bottom: 1px solid #d5d5d5;
  padding: 0 2px;
  color: #6f6f6f;
  font-size: 14px;
`;

export const Footer = styled.footer`
  padding: 0 2px;
  color: #6f6f6f;
  font-size: 11px;
`;
