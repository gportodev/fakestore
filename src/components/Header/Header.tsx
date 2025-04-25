import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Header(): JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top * 2,
        },
      ]}
    >
      <Text style={styles.title}>FakeStore</Text>
    </View>
  );
}

export { Header };
