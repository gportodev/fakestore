import React, { useCallback } from 'react';

import { Product } from '../../dtos/ProductDTO';

import { useUser } from '../../context/user';
import { List } from '../../components/List';
import { FavoriteProps } from '../../routes/types';

function Favorites({ navigation }: FavoriteProps): JSX.Element {
  const { favorites } = useUser();

  const onPress = useCallback(
    (item: Product) => {
      navigation.navigate('Main', { screen: 'Detail', params: { item } });
    },
    [navigation],
  );

  return <List list={favorites} onPress={onPress} screen="favorites" />;
}

export { Favorites };
