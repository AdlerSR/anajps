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
} from '@/styles/pages/index';

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
      <ProjectsWrapper>
        <GridItem css={{ gridArea: 'project1' }}>
          <ProjectCard>
            <ProjectImage
              src="https://unsplash.it/g/640/600?random"
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
              src="https://unsplash.it/g/640/600?random"
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
              src="https://unsplash.it/g/640/822?random"
              alt=""
              width="640"
              height="822"
            />
            <ProjectName>Lorem Ipsum</ProjectName>
          </ProjectCard>
        </GridItem>
      </ProjectsWrapper>
    </>
  );
}
