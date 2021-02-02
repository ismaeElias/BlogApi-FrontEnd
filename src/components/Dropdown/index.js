import React, { useState, useEffect } from "react";
import { Container,ContainerDD } from './styles';

function Dropdown({children}) {
  const [open , setOpen ] = useState('none');

  useEffect(() => {
    const DropDown = open;
    setOpen(DropDown);
  },[open]);

  function handlerOpen(){
    if(open === 'none'){
      setOpen('block');
    }else {
      setOpen('none');
    }
  }

  return (
    <Container>
      <h3 onClick={handlerOpen}>{children}</h3>
      <ContainerDD open={open} >
        <a href="/Perfil">Perfil</a>
        <a href="/logout">Sair</a>
      </ContainerDD>
    </Container>
  );
}

export default Dropdown;
