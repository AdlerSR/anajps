import { styled } from '@/root/stitches.config';
import Image from 'next/image';
import Mouse from '../../components/Icons/Mouse';

export const Container = styled('div', {
  background:
    'url("/noise.webp"), linear-gradient(142deg, rgba(30, 56, 95, 1) 8%, rgba(42, 24, 72, 1) 53%, rgba(45, 14, 65, 1) 93%)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  variants: {},
});

export const HeaderContent = styled('div', {
  padding: '80px 175px',
});

export const Name = styled('h2', {
  fontSize: '$md',
  color: '$secondary200',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginBottom: '24px',
});

export const Title = styled('h1', {
  fontSize: '$4xl',
  color: '$light',
  marginBottom: '95px',
});

export const ContentBackground = styled('div', {});

export const GradientTitle = styled('span', {
  variants: {
    gradient: {
      green: {
        background:
          '-webkit-linear-gradient(0deg, #57CC99 0%, #60C887 20.0%, #6BC374 40.0%, #78BE62 60.0%, #85B84F 80.0%, #92B23E 100.0%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
      rainbow: {
        background:
          'linear-gradient(90deg, #57CC99 0%, #60C887 6.25%, #6BC374 12.5%, #78BE62 18.75%, #85B84F 25%, #92B23E 31.25%, #A0AA2D 37.5%, #ADA21E 43.75%, #BB9912 50%, #C88E0E 56.25%, #D48314 62.5%, #E07620 68.75%, #EA672D 75%, #F3563B 81.25%, #F9434B 87.5%, #FE2B5C 93.75%, #FF006E 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    },
  },
});

export const MouseIcon = styled(Mouse, {
  marginLeft: '10px',
});

export const ProjectsWrapper = styled('div', {
  display: 'grid',
  gap: '80px 32px',
  padding: '180px 64px',
  justifyItems: 'start',
  gridTemplate: `
    "subtitle description"
    "project1 project3" 660px
    "project2 project4" 660px
    / 1fr 1fr
  `,
});

export const ProjectCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  gap: '30px',
});

export const ProjectName = styled('p', {
  color: '$grey400',
  fontWeight: 500,
  fontSize: '24px',
});

export const ProjectImage = styled(Image, { flex: 1, borderRadius: '24px' });

export const GridItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Subtitle = styled('h2', {
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '32px',
  gridArea: 'subtitle',
  color: '$dark',
});

export const Description = styled('p', {
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '150%',
  gridArea: 'description',
  color: '$grey300',
});
