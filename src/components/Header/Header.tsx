import React from 'react';
import Link from 'next/link';

import Logo from '@/components/Icons/Logo';

import { Container, CustomLink, LinksWrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo/>
      <LinksWrapper>
        <CustomLink href="/" color='grey'>
          Sobre mim
        </CustomLink>
        <CustomLink href="/" color='grey'>
          Linkedin
        </CustomLink>
        <CustomLink href="/" color='pink'>
          Entre em contato
        </CustomLink>
      </LinksWrapper>
    </Container>
  );
}

export default Header;