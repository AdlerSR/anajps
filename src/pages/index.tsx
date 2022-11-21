import Header from '@/components/Header';
import Mouse from '@/components/Icons/Mouse';

import {
  Container,
  Content,
  GradientTitle,
  Name,
  Title,
  MouseIcon,
} from '@/styles/pages/index';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Name>Anaju Pereira</Name>
        <Title>
          Crio interfaces <br /> intuitivas, potentes e <br /> com{' '}
          <GradientTitle gradient="rainbow">design de outro</GradientTitle>{' '}
          <br /> <GradientTitle gradient="green">planeta</GradientTitle>
        </Title>
        <MouseIcon />
      </Content>
    </Container>
  );
}
