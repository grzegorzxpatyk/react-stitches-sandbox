import {
  blueA,
  blueDarkA,
  cyanA,
  cyanDarkA,
  indigoA,
  indigoDarkA,
  skyA,
  skyDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA
} from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...slate,
      ...slateA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...cyanA
    }
  }
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...slateDark,
    ...slateDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...cyanDarkA
  }
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  '#App': {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '$slate1',
    color: '$slate12',
    fontFamily: 'Inter, sans-serif'
  }
});
