import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.lobster_regular,
  },
});
