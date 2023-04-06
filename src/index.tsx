import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { onChangeInput } from './functions';

interface ITextInputWithSeparator extends TextInputProps {
  onChangeText: (text: string) => void;
}

const TextInputWithSeparator = (props: ITextInputWithSeparator) => {
  const { onChangeText, value } = props;
  const setInput = (text: string) => {
    onChangeInput(text, onChangeText);
  };
  return (
    <TextInput
      {...props}
      value={value}
      keyboardType="decimal-pad"
      onChangeText={setInput}
    />
  );
};

export default TextInputWithSeparator;
