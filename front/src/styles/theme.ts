import { DefaultTheme } from 'styled-components';

const bgColor = {
  white: '#fff',
  gray: '#efefef',
  black: '#000',
};
const colors = {
  white: '#fff',
  black: '#000',
  point_0: '#493462',
  point_1: '#7856a9',
  point_2: '#b887c2',
  point_3: '#e8a8c4',
  point_4: '#bbb0ff',
  point_5: '#cbddf6',
  point_6: '#f0ebfd',
};
const fontSize = {
  title: 1.8,
  title_m: 1.8,
  text: 1.4,
};

const buttons = {
  m: {
    fontSize: 1.2,
    padding: 8,
  },
};
export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type BgColorTypes = typeof bgColor;
export type ButtonsTypes = typeof buttons;
const theme: DefaultTheme = {
  colors,
  fontSize,
  bgColor,
  buttons,
};

export default theme;
