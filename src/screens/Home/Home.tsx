import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { HomeProps } from '../../routes/types';
import { Product } from '../../dtos/ProductDTO';
import { List } from '../../components/List';

function Home({ navigation }: HomeProps): JSX.Element {
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
      <Header />

      <List onPress={onPress} />
    </SafeAreaView>
  );
}

export { Home };
