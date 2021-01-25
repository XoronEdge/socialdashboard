import {ThemeManager, Spacings, Colors, Typography} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {handleMargins, handlePaddings} from '../../../Theme/Base';
// with a dynamic function
import {OurTextProps} from './Text';

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: Spacings.base,
    color: Colors.primary,
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  accent: {color: Colors.accent},
  primary: {color: Colors.primary},
  secondary: {color: Colors.secondary},
  tertiary: {color: Colors.tertiary},
  black: {color: Colors.black},
  white: {color: Colors.white},
  gray: {color: Colors.gray},
  gray2: {color: Colors.gray2},
  // fonts
  h1: Typography.h1,
  h2: Typography.h2,
  h3: Typography.h3,
  h4: Typography.h4,
  title: Typography.title,
  title2: Typography.title2,
  header: Typography.header,
});

ThemeManager.setComponentTheme('Text', {
  ...styles.text,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  header: styles.header,
  h4: styles.h4,
  title: styles.title,
  title2: styles.title2,
  regular: styles.regular,
  bold: styles.bold,
  semibold: styles.semibold,
  medium: styles.medium,
  light: styles.light,
  center: styles.center,
  right: styles.right,
  // col: shortcuts
  accent: styles.accent,
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  black: styles.black,
  white: styles.white,
  gray: styles.gray,
  gray2: styles.gray2,
});

ThemeManager.setComponentTheme('Text', (props: OurTextProps) => {
  const {
    color,
    paddingAll,
    marginAll,
    transform,
    align,
    lineHeight,
    letterSpacing,
    weight,
    size,
    style,
    // children,
  } = props;

  const finalStyle = {
    ...(marginAll && handleMargins(marginAll)),
    ...(paddingAll && handlePaddings(paddingAll)),
    ...(size && {fontSize: size}),
    ...(transform && {textTransform: transform}),
    ...(align && {textAlign: align}),
    ...(lineHeight && {lineHeight: lineHeight}),
    ...(letterSpacing && {letterSpacing: spacing}),
    ...(weight && {fontWeight: weight}),
    ...(color && styles[color]), // predefined styles colors for backgroundColor
    ...(color && !styles[color] && {backgroundColor: color}), // custom backgroundColor
    ...(style && style), // rewrite predefined styles
  };
  return finalStyle;
});
