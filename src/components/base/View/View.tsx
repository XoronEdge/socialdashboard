import React from 'react';
import {View as UiView, ViewPropTypes} from 'react-native-ui-lib';

export interface OurViewProps extends ViewPropTypes {
  flexCount?: boolean | number;
  row?: boolean;
  column?: boolean;
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  shadow?: boolean;
  color?: string;
  space?: string;
  paddingAll?: Array<number>;
  marginAll?: Array<number>;
  wrap?: boolean;
  crossLeft?: boolean;
  crossRight?: boolean;
  crossTop?: boolean;
  crossBottom?: boolean;
  baseline?: boolean;
  round?: number;
  card?: boolean;
  rounded?: boolean;
  style?: any;
  children: any;
}
const View = (props: OurViewProps) => {
  return <UiView {...props}>{props.children}</UiView>;
};

export default View;
