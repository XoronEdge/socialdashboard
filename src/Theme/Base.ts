import {Typography, Colors, Spacings} from 'react-native-ui-lib';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//import {Alert} from 'react-native';
// const scaleFont = (size) => size * PixelRatio.getFontScale();
const screenSize = wp('100%') + hp('100%');
const getDimensions = {
  width: wp('100%'),
  height: hp('100%'),
};

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
  base: Math.floor(screenSize * 0.0125), //16
  border: Math.floor(screenSize * 0.008), //10
  padding: Math.floor(screenSize * 0.011), //14
  borderRadius: screenSize * 0.015,

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

Spacings.loadSpacings({
  base: sizes.base,
  border: sizes.border,
  padding: sizes.padding,
  borderRadius: sizes.borderRadius,
  horizontalpace1: wp(1),
  horizontalpace2: wp(2),
  horizontalpace3: wp(3),
  horizontalpace4: wp(4),
  horizontalpace5: wp(5),
  horizontalpace6: wp(6),
  horizontalpace7: wp(7),
  horizontalpace8: wp(8),
  horizontalpace9: wp(9),
  horizontalpace10: wp(10),
  horizontalpace11: wp(11),
  horizontalpace12: wp(12),
  horizontalpace13: wp(13),
  horizontalpace14: wp(14),
  horizontalpace15: wp(15),
  horizontalpace16: wp(16),
  horizontalpace17: wp(17),
  horizontalpace18: wp(18),
  horizontalpace19: wp(19),
  horizontalpace20: wp(20),
  verticalSpace1: hp(1),
  verticalSpace2: hp(2),
  verticalSpace3: hp(3),
  verticalSpace4: hp(4),
  verticalSpace5: hp(5),
  verticalSpace6: hp(6),
  verticalSpace7: hp(7),
  verticalSpace8: hp(8),
  verticalSpace9: hp(9),
  verticalSpace10: hp(10),
  verticalSpace11: hp(11),
  verticalSpace12: hp(12),
  verticalSpace13: hp(13),
  verticalSpace14: hp(14),
  verticalSpace15: hp(15),
  verticalSpace16: hp(16),
  verticalSpace17: hp(17),
  verticalSpace18: hp(18),
  verticalSpace19: hp(19),
  verticalSpace20: hp(20),
});

const getWidth = (width: string) => wp(width);
const getHeight = (height: string) => hp(height);

const withWidth = (size: number) => getDimensions.width * size;
const withHeight = (size: number) => getDimensions.height * size;
const withScreen = (size: number) => screenSize * size;

function handleMargins(margin: number | Array<number>) {
  if (typeof margin === 'number') {
    return {
      marginTop: margin,
      marginRight: margin,
      marginBottom: margin,
      marginLeft: margin,
    };
  }

  if (typeof margin === 'object') {
    const marginSize = Object.keys(margin).length;
    switch (marginSize) {
      case 1:
        return {
          marginTop: margin[0],
          marginRight: margin[0],
          marginBottom: margin[0],
          marginLeft: margin[0],
        };
      case 2:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[0],
          marginLeft: margin[1],
        };
      case 3:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[1],
        };
      default:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[3],
        };
    }
  }
}

function handlePaddings(padding: number | Array<number>) {
  if (typeof padding === 'number') {
    return {
      paddingTop: padding,
      paddingRight: padding,
      paddingBottom: padding,
      paddingLeft: padding,
    };
  }

  if (typeof padding === 'object') {
    const paddingSize = Object.keys(padding).length;
    switch (paddingSize) {
      case 1:
        return {
          paddingTop: padding[0],
          paddingRight: padding[0],
          paddingBottom: padding[0],
          paddingLeft: padding[0],
        };
      case 2:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[0],
          paddingLeft: padding[1],
        };
      case 3:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[1],
        };
      default:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[3],
        };
    }
  }
}
export {
  getDimensions,
  screenSize,
  getWidth,
  getHeight,
  withWidth,
  withScreen,
  withHeight,
  handleMargins,
  handlePaddings,
};
