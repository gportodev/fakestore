import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  columnContainer: {
    gap: 8,
    paddingHorizontal: 24,
  },
  listContainer: {
    gap: 10,
  },
  emptyContainer: {
    gap: 16,
    alignItems: 'center',
  },
  emptyTextTitle: {
    fontFamily: Fonts.roboto_semibold,
    color: colors.obsidian,
    fontSize: 18,
    textAlign: 'center',
  },
  emptyTextSubTitle: {
    fontFamily: Fonts.roboto_regular,
    color: colors.graniteFog,
    fontSize: 16,
    textAlign: 'center',
  },
});
