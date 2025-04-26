import React from 'react';
import { Product } from '../../dtos/ProductDTO';
import { Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import styles from './styles';
import {
  OutlinedHeartIcon,
  StarIcon,
  FilledHeartIcon,
} from '../../assets/icons/Loader';
import { truncate } from '../../utils/string';
import colors from '../../constants/colors';
import { useUser } from '../../context/user';

type CardProps = {
  item: Product;
  onPress: (item: Product) => void;
  screen: 'home' | 'favorites';
};

const iconProps = {
  width: 24,
  height: 24,
  color: colors.obsidian,
};

function Card({ item, onPress, screen }: CardProps): JSX.Element {
  const { addFavorite, removeFavorite, favorites } = useUser();

  const isAlreadyFavorite = favorites.some(element => element.id === item.id);

  const hasOnlyOneFavorite = favorites.length === 1;

  const isFavoriteScreen = screen === 'favorites';

  const toogleFavorite = () => {
    if (isAlreadyFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isFavoriteScreen &&
          hasOnlyOneFavorite && {
            flex: 0,
            width: Dimensions.get('screen').width / 2 - 24,
          },
      ]}
      onPress={() => onPress(item)}
    >
      <TouchableOpacity
        onPress={toogleFavorite}
        style={{
          alignSelf: 'flex-end',
          right: 10,
        }}
      >
        {isAlreadyFavorite ? (
          <FilledHeartIcon {...iconProps} />
        ) : (
          <OutlinedHeartIcon {...iconProps} />
        )}
      </TouchableOpacity>

      <Image
        resizeMode="contain"
        height={150}
        source={{ uri: item.image }}
        borderRadius={8}
      />

      <View style={styles.cardFooter}>
        <Text style={styles.cardTitle}>{truncate(item.title, 20)}</Text>

        <View style={styles.cardWrap}>
          <Text style={styles.cardPrice}>{'$' + item.price}</Text>

          <View style={styles.cardRatingContainer}>
            <StarIcon width={16} height={16} color={colors.yellow} />
            <Text style={styles.cardRatingText}>{item.rating.rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export { Card };
