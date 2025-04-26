import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartIcon } from '../../assets/icons/Loader';
import colors from '../../constants/colors';

function Header(): JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Text style={styles.title}>FakeStore</Text>
      <CartIcon color={colors.obsidian} width={32} height={32} />
    </View>
  );
}

export { Header };
