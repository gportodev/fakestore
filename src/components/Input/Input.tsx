import React from 'react';
import { TextInput } from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

function Input({ value, onChange }: InputProps): JSX.Element {
  return (
    <TextInput
      placeholder={'Search...'}
      placeholderTextColor={colors.obsidian}
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={text => onChange(text)}
      value={value}
      style={styles.container}
    />
  );
}

export { Input };
