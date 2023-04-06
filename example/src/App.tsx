import * as React from 'react';
import TextInputWithSeparator from 'rn-text-input-format';
import { SafeAreaView } from 'react-native';

export default function App() {
  const [input, setInput] = React.useState('');
  return (
    <SafeAreaView>
      <TextInputWithSeparator
        placeholder="Enter number"
        onChangeText={setInput}
        value={input}
        style={{ backgroundColor: 'yellow', width: '100%', height: 100 }}
      />
    </SafeAreaView>
  );
}
