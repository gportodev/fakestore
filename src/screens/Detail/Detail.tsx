import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DetailProps } from '../../routes/types';
import {
  ArrowLeftIcon,
  FilledHeartIcon,
  OutlinedHeartIcon,
  StarIcon,
} from '../../assets/icons/Loader';
import colors from '../../constants/colors';
import styles from './styles';
import { useUser } from '../../context/user';

const iconProps = {
  width: 24,
  height: 24,
  color: colors.obsidian,
};

function Detail({ navigation, route }: DetailProps): JSX.Element {
  const { favorites, addFavorite, removeFavorite } = useUser();
  const { item } = route.params;
  const isAlreadyFavorite = favorites.some(element => element.id === item.id);

  const goBack = () => {
    navigation.goBack();
  };

  const toogleFavorite = () => {
    if (isAlreadyFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeftIcon width={24} height={24} color={colors.obsidian} />
        </TouchableOpacity>

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

        <Image resizeMode="contain" height={200} source={{ uri: item.image }} />

        <View style={styles.infoContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.ratingContainer}>
              <StarIcon width={24} height={24} color={colors.yellow} />
              <Text style={styles.ratingText}>{item.rating.rate}</Text>
            </View>
          </View>

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{'$' + item.price}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export { Detail };
