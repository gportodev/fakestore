import React from 'react';
import { Product } from '../../dtos/ProductDTO';
import { Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import styles from './styles';
import { StarIcon } from '../../assets/icons/Loader';
import { truncate } from '../../utils/string';
import colors from '../../constants/colors';

type CardProps = {
  item: Product;
  onPress: (item: Product) => void;
};

function Card({ item, onPress }: CardProps): JSX.Element {
  const screenWidth = Dimensions.get('screen').width;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Image
        resizeMode="contain"
        width={(screenWidth - 48 - 16) * 0.5}
        height={171}
        source={{ uri: item.image }}
        borderRadius={8}
      />

      <View style={styles.cardFooter}>
        <Text style={styles.cardTitle}>{truncate(item.title, 20)}</Text>

        <View style={styles.cardWrap}>
          <Text style={styles.cardPrice}>{'$' + item.price}</Text>

          <View style={styles.cardRatingContainer}>
            <StarIcon width={13} height={12} color={colors.yellow} />
            <Text style={styles.cardRatingText}>{item.rating.rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export { Card };
