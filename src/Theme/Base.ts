import {Typography, Colors} from 'react-native-ui-lib';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//import {Alert} from 'react-native';
const colors = {
  blue: '#5200ff',
  blue2: '#5945ff',
  blue3: '#6fcef4',
  blue4: '#dbeff6',
  green: '#00ea62',
  red: '#ff0c45',
  yellow: '#F7C137',
  teal: '#00C1D4',
  purple: '#8C54FF',
  black: '#000',
  black2: '#1e1f20',
  white: '#ffffff',
  white2: '#f7f7f7',
  gray: '#4b4b4c',
  gray1: '#F4F6FC',
  gray2: '#b8b7c3',
  gray3: '#e9e8ec',
};
Colors.loadColors({
  ...colors,
});

const sizes = {
  font: hp('2.5'), //16
  h1: hp('7.5'), //48
  h2: hp('5.3'), //34
  h3: hp('4.4'), //24
  h4: hp('2.8'), //16
  paragraph: hp('2.2'), //14
  caption: hp('1.55'), //10
  captionMedium: hp('1.9'), //12
};

Typography.loadTypographies({
  h1: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.h1,
    color: colors.black,
    letterSpacing: -0.6,
    lineHeight: 57,
  },
  h2: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.h2,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h3: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.h3,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h4: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.h4,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 18,
  },
  paragraph: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.paragraph,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 22,
  },
  paragraphGray: {
    fontFamily: 'Objectivity-Regular',
    fontSize: sizes.paragraph,
    color: colors.gray3,
    letterSpacing: 0,
    lineHeight: 22,
  },
  paragraphGray2: {
    fontFamily: 'Objectivity-Regular',
    fontSize: sizes.paragraph,
    color: colors.gray2,
    letterSpacing: 0,
    lineHeight: 22,
  },
  caption: {
    fontFamily: 'Objectivity-Regular',
    fontSize: sizes.caption,
    color: colors.black,
    letterSpacing: 1.12,
    lineHeight: 15,
  },
  captionMedium: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.captionMedium,
    color: colors.black,
    letterSpacing: 1.12,
    lineHeight: 14,
  },
  button: {
    fontFamily: 'Objectivity-Medium',
    fontSize: sizes.font,
    color: colors.white,
    letterSpacing: 0,
    lineHeight: 21,
  },
});

// Spacings.loadSpacings({
//   page: isSmallScreen ? 16 : 20,

// });
