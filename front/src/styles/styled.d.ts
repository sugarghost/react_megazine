import 'styled-components';
import { ColorsTypes, FontSizeTypes, BgColorTypes, ButtonsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    bgColor: BgColorTypes;
    buttons: ButtonsTypes;
  }
}
