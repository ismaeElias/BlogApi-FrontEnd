import styled from "styled-components";

export const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border-radius: 5px;
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
    "HD"
    "CT"
    "FT";

  header {
    grid-area: 'HD';
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    border-bottom: 1px solid #888;
    background-color: #8a85d0;
    color: #fefefe;
    position: relative;

    span {
      position: absolute;
      right: 15px;
      transition: 0.3s all ease-in-out;
      cursor: pointer;
    }

    span:hover {
      color: black;
    }
  }

  main {
    grid-area: 'CT';
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 10px 15px 0 15px;
  }

  footer {
    grid-area: 'FT';
    border-top: 1px solid #8a85d0;
  }
`;

export const InputTitulo = styled.input`
  border: 1px solid #9f9f9f;
  padding: 5px;
  width: 100%;
  transition: 0.3s all ease-in-out;
  font-weight: 500;
  &:focus {
    border: 1px solid #8a85d0;
    box-shadow: 1px 1px 10px 0px rgba(138, 133, 208, 0.75);
    -webkit-box-shadow: 1px 1px 10px 0px rgba(138, 133, 208, 0.75);
    -moz-box-shadow: 1px 1px 4px 10px rgba(138, 133, 208, 0.75);
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid #9f9f9f;
  transition: 0.3s all ease-in-out;
  font-size: 14px;

  &:focus {
    border: 1px solid #8a85d0;
    box-shadow: 1px 1px 10px 0px rgba(138, 133, 208, 0.75);
    -webkit-box-shadow: 1px 1px 10px 0px rgba(138, 133, 208, 0.75);
    -moz-box-shadow: 1px 1px 4px 10px rgba(138, 133, 208, 0.75);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8a85d0;
  color : #fff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  font-weight: bold;
  font-size: 18px;  

  &:hover {
    color: #222;
  }
`;