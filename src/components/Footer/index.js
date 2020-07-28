import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/spacexjedi">
        <img src="https://github.com/spacexjedi/alderan_stream/blob/master/src/assets/img/star-wars.svg" alt="Logo Jedi" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          ImersÃ£o React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
