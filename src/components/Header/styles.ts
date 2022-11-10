import { styled } from "@/root/stitches.config";

import Link from 'next/link';


export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px 130px',
  borderBottom: '1px solid $grey400',
  variants: {}
})

export const CustomLink = styled(Link, {
  fontSize: '$md',
  textDecoration: 'none',
  fontWeight: '500',
  variants: {
    color: {
      pink: {
        color: '$primary300'
      },
      grey: {
        color: '$grey200'
      }
    },
  },
});

export const LinksWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '50px'
})
