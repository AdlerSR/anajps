import { styled, theme } from '@/root/stitches.config';

import Link from 'next/link';
import { darken } from 'polished';
import Arrow from '../Icons/Arrow';

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px 130px',
  borderBottom: '1px solid $grey400',
  variants: {},
});

export const ArrowIcon = styled(Arrow, {
  marginLeft: '10px',
  fill: '$primary300',
  transition: 'fill 0.2s',
});

export const CustomLink = styled(Link, {
  fontSize: '$md',
  textDecoration: 'none',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s',
  variants: {
    color: {
      pink: {
        color: '$primary300',
        '&:hover': {
          color: darken(0.1, theme.colors.primary300.value),
          [`& ${ArrowIcon}`]: {
            fill: darken(0.1, theme.colors.primary300.value),
          },
        },
      },
      grey: {
        color: '$grey200',
        '&:hover': {
          color: darken(0.1, theme.colors.grey200.value),
          [`& ${ArrowIcon}`]: {
            fill: darken(0.1, theme.colors.grey200.value),
          },
        },
      },
    },
  },
});

export const LinksWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
});
