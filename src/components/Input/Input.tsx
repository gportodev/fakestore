import React from 'react';
import { TextInput, View } from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import { SearchIcon } from '../../assets/icons/Loader';

type InputProps = {
  value: string;
  setValue: (value: string) => void;
};

function Input({ value, setValue }: InputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <SearchIcon
        width={16}
        height={16}
        color={colors.obsidian}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 10,
        }}
      />
      <TextInput
        placeholder={'Search...'}
        placeholderTextColor={colors.obsidian}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setValue}
        value={value}
        style={styles.inputContainer}
      />
    </View>
  );
}

export { Input };
