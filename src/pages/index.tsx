import Header from '@/components/Header';

import {
  Container,
  HeaderContent,
  GradientTitle,
  Name,
  Title,
  MouseIcon,
  ProjectsWrapper,
  GridItem,
  ProjectCard,
  ProjectImage,
  ProjectName,
  Subtitle,
  Description,
  ContentBackground,
} from '@/styles/pages/index';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <HeaderContent>
          <Name>Anaju Pereira</Name>
          <Title>
            Crio interfaces <br /> intuitivas, potentes e <br /> com{' '}
            <GradientTitle gradient="rainbow">design de outro</GradientTitle>{' '}
            <br /> <GradientTitle gradient="green">planeta</GradientTitle>
          </Title>
          <MouseIcon />
        </HeaderContent>
      </Container>
      <ContentBackground>
        <ProjectsWrapper>
          <Subtitle>Projetos que falam por si só</Subtitle>
          <Description>
            Esses são projetos super especiais, que pude me jogar
            <br /> de cabeça e aprender muito com os processos.
          </Description>
          <GridItem css={{ gridArea: 'project1' }}>
            <ProjectCard>
              <ProjectImage
                src="https://unsplash.it/640/600?random"
                alt=""
                width="640"
                height="600"
              />
              <ProjectName>Lorem Ipsum</ProjectName>
            </ProjectCard>
          </GridItem>
          <GridItem css={{ gridArea: 'project2' }}>
            <ProjectCard>
              <ProjectImage
                src="https://unsplash.it/640/600?random"
                alt=""
                width="640"
                height="600"
              />
              <ProjectName>Lorem Ipsum</ProjectName>
            </ProjectCard>
          </GridItem>
          <GridItem css={{ gridArea: 'project3' }}>
            <ProjectCard>
              <ProjectImage
                src="https://unsplash.it/640/822?random"
                alt=""
                width="640"
                height="822"
              />
              <ProjectName>Lorem Ipsum</ProjectName>
            </ProjectCard>
          </GridItem>
        </ProjectsWrapper>
        <Footer />
      </ContentBackground>
    </>
  );
}
