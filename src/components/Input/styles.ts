import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    fontSize: 16,
    fontFamily: Fonts.roboto_regular,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    fontSize: 16,
    fontFamily: Fonts.roboto_regular,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingLeft: 40,
  },
});
