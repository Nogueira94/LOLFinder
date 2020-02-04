import React from 'react';

function Header(props){ // props são os parametros da função, props são todas propriedades repassadas para o componente
    return <h1>{props.title}</h1>
  }

export default Header;