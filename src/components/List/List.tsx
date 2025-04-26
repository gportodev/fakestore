import React, { useCallback, useMemo } from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Input } from '../Input';
import styles from './styles';
import { Product } from '../../dtos/ProductDTO';
import { Card } from '../Card';
import { SadIcon } from '../../assets/icons/Loader';
import colors from '../../constants/colors';
import { useUser } from '../../context/user';
import { Header } from '../Header';

type ListProps = {
  onPress: (item: Product) => void;
  list: Product[] | [];
  screen: 'home' | 'favorites';
};

function List({ onPress, list, screen }: ListProps): JSX.Element {
  const { search, setSearch } = useUser();

  const filteredProducts = useMemo(() => {
    return list.filter(item => {
      const matchesSearch =
        item.title.includes(search.toLowerCase()) ||
        item.price.toString().includes(search.toLowerCase()) ||
        item.category.includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [list, search]);

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <SadIcon width={100} height={100} color={colors.obsidian} />

        <Text style={styles.emptyTextTitle}>No product found</Text>
        {search.length > 0 && (
          <Text style={styles.emptyTextSubTitle}>Did you type correctly?</Text>
        )}
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: { item: Product }) => {
      return <Card item={item} onPress={onPress} screen={screen} />;
    },
    [onPress, screen],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <Header />

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.header}>
                  <Input value={search} setValue={setSearch} />
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        }
        columnWrapperStyle={styles.columnContainer}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item: Product) => item.id.toString()}
        ListEmptyComponent={renderEmpty}
      />
    </SafeAreaView>
  );
}

export { List };
