import React from 'react';
import { View, TextInput } from 'react-native';

export default function TextField() {
  const [input, setInput] = React.useState<string>('');

  return (
    <View>
      <TextInput
        onChangeText={(text) => setInput(text)}
        value={input}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}
