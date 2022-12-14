import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      system: 'DM Sans',
    },
    colors: {
      primary100: 'rgba(255, 128, 183, 0.3)',
      primary200: 'rgba(255, 77, 154, 1)',
      primary300: 'rgba(255, 0, 110, 1)',
      primary400: 'rgba(179, 0, 77, 1)',
      primary500: 'rgba(140, 0, 61, 1)',

      secondary100: 'rgba(188, 235, 214, 1)',
      secondary200: 'rgba(146, 222, 189, 1)',
      secondary300: 'rgba(87, 204, 153, 1)',
      secondary400: 'rgba(65, 153, 115, 1)',
      secondary500: 'rgba(57, 133, 99, 1)',

      grey100: 'rgba(232, 232, 233, 1)',
      grey200: 'rgba(208, 209, 210, 1)',
      grey300: 'rgba(138, 140, 143, 1)',
      grey400: 'rgba(68, 70, 76, 1)',

      dark: 'rgba(21, 24, 31, 1)',
      light: 'rgba(255, 255, 255, 1)',
    },
    fontSizes: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
    },
  },
  media: {
    bp_sm: '(min-width: 640px)',
    bp_md: '(min-width: 768px)',
    bp_lg: '(min-width: 1024px)',
    bp_xl: '(min-width: 1280px)',
    bp_2xl: '(min-width: 1455px)',
  },
});
