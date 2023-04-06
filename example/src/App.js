import * as React from 'react';
import TextInputWithSeparator from '../../lib/typescript/App';
import { SafeAreaView } from 'react-native';
export default function App() {
    const [input, setInput] = React.useState('');
    return (React.createElement(SafeAreaView, null,
        React.createElement(TextInputWithSeparator, { placeholder: "hellolkjlkjklj", onChangeText: setInput, value: input, style: { backgroundColor: 'yellow', width: '100%', height: 100 } })));
}
