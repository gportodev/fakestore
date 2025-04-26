import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 32,
    backgroundColor: colors.white,
  },
  favoriteContainer: {
    alignSelf: 'flex-end',
    right: 10,
  },
  infoContainer: {
    paddingVertical: 24,
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.roboto_medium,
    color: colors.black,
  },
  contentHeader: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 20,
    fontFamily: Fonts.roboto_regular,
    color: colors.deepFog,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  ratingText: {
    fontSize: 20,
    fontFamily: Fonts.roboto_regular,
    color: colors.deepFog,
  },
  description: {
    fontSize: 20,
    fontFamily: Fonts.roboto_regular,
    color: colors.deepFog,
  },
  price: {
    fontSize: 20,
    fontFamily: Fonts.roboto_semibold,
    color: colors.black,
  },
});
