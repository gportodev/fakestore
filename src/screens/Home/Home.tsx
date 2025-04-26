import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { HomeProps } from '../../routes/types';
import { Product } from '../../dtos/ProductDTO';
import { List } from '../../components/List';
import { useUser } from '../../context/user';

function Home({ navigation }: HomeProps): JSX.Element {
  const { list } = useUser();

  const onPress = useCallback(
    (item: Product) => {
      navigation.navigate('Detail', { item });
    },
    [navigation],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <List list={list} onPress={onPress} screen="home" />
    </SafeAreaView>
  );
}

export { Home };
