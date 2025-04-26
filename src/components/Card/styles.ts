import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grayishBlue,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  cardFooter: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    gap: 6,
  },
  cardWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: Fonts.roboto_medium,
    color: colors.black,
  },
  cardPrice: {
    fontSize: 18,
    fontFamily: Fonts.roboto_semibold,
    color: colors.black,
  },
  cardRatingContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRatingText: {
    fontSize: 16,
    fontFamily: Fonts.roboto_regular,
    color: colors.deepFog,
  },
});
