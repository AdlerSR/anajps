import { styled } from '@/root/stitches.config';
import { css } from '@stitches/react';

export const Container = styled('footer', {
  padding: '72px 120px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(40px)',
  borderTop: '0.5px solid #FFFFFF',
});

export const Text = styled('p', {
  fontWeight: 700,
  fontSize: '$4xl',
  lineHeight: '110%',
  letterSpacing: '-0.01em',
  color: '#15181F',
});

export const Button = styled('button', {
  padding: '16px 32px',
  background: '#FF006E',
  borderRadius: '8px',
  color: '#FFFFFF',
  marginTop: '32px',
});

export const FooterRow = styled('div', {
  borderTop: '1px solid #E8E8E9',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: '24px',
});

export const Message = styled('p', {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  color: '#8A8C8F',
});

export const LinksWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
});

export const Link = styled('a', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
  color: '#44464C',
  textDecoration: 'none',
});
