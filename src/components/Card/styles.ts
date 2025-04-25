import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
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
    fontSize: 14,
    fontFamily: Fonts.roboto_medium,
    color: colors.black,
    lineHeight: 14,
  },
  cardPrice: {
    fontSize: 14,
    fontFamily: Fonts.roboto_semibold,
    color: colors.black,
  },
  cardRatingContainer: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  cardRatingText: {
    fontSize: 12,
    fontFamily: Fonts.roboto_regular,
    color: colors.deepFog,
    lineHeight: 12,
  },
});
