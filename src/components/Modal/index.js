import React, { useState } from "react";
import {
  ModalContainer,
  ModalContent,
  InputTitulo,
  TextArea,
  Button,
} from "./styles";
import { CgClose } from "react-icons/cg";

function Modal() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  return (
    <ModalContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ titulo: titulo, conteudo: conteudo });
        }}
      >
        <ModalContent>
          <header>
            <h4>Crie um novo conteúdo &#9889;</h4>
            <span>
              <CgClose />
            </span>
          </header>

          <main>
            <label>
              Titulo:
              <InputTitulo
                type="text"
                value={titulo}
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />
            </label>
            <label>
              Conteúdo:
              <TextArea
                rows="9"
                value={conteudo}
                onChange={(e) => {
                  setConteudo(e.target.value);
                }}
              />
            </label>
          </main>
          <footer>
            <Button type="submit" id="submit">
              Criar &#128527;
            </Button>
          </footer>
        </ModalContent>
      </form>
    </ModalContainer>
  );
}

export default Modal;
