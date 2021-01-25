// just copy this code from the driving repo :)
import React from 'react';
import {Text as UiText, TextPropTypes} from 'react-native-ui-lib';

export interface OurTextProps extends TextPropTypes {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  title?: boolean;
  title2?: boolean;
  size?: string;
  header?: boolean;
  transform?: string;
  align?: string;
  //? styling
  regular?: boolean;
  paddingAll?: Array<number>;
  marginAll?: Array<number>;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
  weight?: string;
  light?: boolean;
  center?: boolean;
  right?: boolean;
  letterSpacing?: string; // letter-spacing
  lineHeight?: string; // line-height
  //? colors
  color?: string;
  accent?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  black?: boolean;
  white?: boolean;
  gray?: boolean;
  gray2?: boolean;
  style?: any;
  children: any;
}

const Text = (props: OurTextProps) => {
  return <UiText {...props}>{props.children}</UiText>;
};

export default Text;
