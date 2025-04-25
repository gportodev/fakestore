import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.roboto_semibold,
  },
});
