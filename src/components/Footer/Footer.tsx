import React from 'react';

import {
  Button,
  Container,
  FooterRow,
  Link,
  LinksWrapper,
  Message,
  Text,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        Saudações 🖖 <br /> Vamos criar algo incrível juntos?
      </Text>
      <Button>Entre em contato</Button>
      <FooterRow>
        <Message>Make with ♥</Message>
        <LinksWrapper>
          <Link href="/">Sobre mim</Link>
          <Link href="/">Linkedin</Link>
        </LinksWrapper>
      </FooterRow>
    </Container>
  );
};

export default Footer;
