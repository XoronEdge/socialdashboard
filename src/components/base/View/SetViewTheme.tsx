import {ThemeManager, Spacings, Colors} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import {handleMargins, handlePaddings} from '../../../Theme/Base';
// with a dynamic function
import {OurViewProps} from './View';

export const styles = StyleSheet.create({
  block: {
    flex: 1,
    // backgroundColor: Colors.black,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: Spacings.borderRadius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  crossLeft: {
    alignItems: 'flex-start',
  },
  crossRight: {
    alignItems: 'flex-end',
  },
  crossTop: {
    alignItems: 'flex-start',
  },
  crossBottom: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },

  blue: {backgroundColor: Colors.blue},
  blue2: {backgroundColor: Colors.blue2},
  blue3: {backgroundColor: Colors.blue3},
  blue4: {backgroundColor: Colors.blue4},
  green: {backgroundColor: Colors.green},
  red: {backgroundColor: Colors.red},
  yellow: {backgroundColor: Colors.yellow},
  teal: {backgroundColor: Colors.teal},
  purple: {backgroundColor: Colors.purple},
  black: {backgroundColor: Colors.black},
  black2: {backgroundColor: Colors.black2},
  white: {backgroundColor: Colors.white},
  white2: {backgroundColor: Colors.white2},
  gray: {backgroundColor: Colors.gray},
  gray1: {backgroundColor: Colors.gray1},
  gray2: {backgroundColor: Colors.gray2},
  gray3: {backgroundColor: Colors.gray3},
});

ThemeManager.setComponentTheme('View', {
  row: styles.row,
  column: styles.column,
  center: styles.center,
  middle: styles.middle,
  left: styles.left,
  right: styles.right,
  top: styles.top,
  bottom: styles.bottom,
  crossLeft: styles.crossLeft,
  crossRight: styles.crossRight,
  crossTop: styles.crossTop,
  crossBottom: styles.crossBottom,
  baseline: styles.baseline,
  card: styles.card,
  shadow: styles.shadow,
  rounded: {borderRadius: Spacings.borderRadius},
  wrap: {flexWrap: 'wrap'},
});

ThemeManager.setComponentTheme('View', (props: OurViewProps) => {
  const {
    flexCount,
    color,
    space,
    paddingAll,
    marginAll,
    // animated,
    round,
    style,
    // children,
  } = props;

  const setFlex =
    flexCount === false ? 0 : (Number.isInteger(flexCount) && flexCount) || 1;
  const finalStyle = {
    ...styles.block,
    flexCount: setFlex,
    ...(marginAll && handleMargins(marginAll)),
    ...(paddingAll && handlePaddings(paddingAll)),
    ...(round && {borderRadius: round}),
    ...(space && {justifyContent: `space-${space}`}),
    ...(color && styles[color]), // predefined styles colors for backgroundColor
    ...(color && !styles[color] && {backgroundColor: color}), // custom backgroundColor
    ...(style && style), // rewrite predefined styles
  };
  return finalStyle;
});
