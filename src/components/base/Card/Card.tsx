import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import View from '../View/View';
import {Spacings} from 'react-native-ui-lib';
import * as ThemeUtils from '../../../Theme';
export interface OurCardProps {
  large: boolean;
  medium: boolean;
  gradient: boolean;
  gradientProps: any;
  style: any;
  children: any;
}
const Card = (props: OurCardProps) => {
  const {large, medium, gradient, gradientProps, style, children} = props;
  const cardStyles = [
    styles.card,
    large && styles.large,
    medium && styles.medium,
    style,
  ];
  if (gradient) {
    return (
      <LinearGradient {...gradientProps} style={cardStyles}>
        {children}
      </LinearGradient>
    );
  }
  return (
    <View style={cardStyles} {...props}>
      {children}
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    borderRadius: Spacings.padding + 5,
    padding: Spacings.base + 4,
    marginBottom: Spacings.base,
    width: '80%',
    height: ThemeUtils.getHeight('38'),
  },
  large: {
    width: '90%',
    height: ThemeUtils.getHeight('28'),
  },
  medium: {
    width: '40%',
    height: ThemeUtils.getHeight('26'),
  },
});
