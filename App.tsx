import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import './src/Theme';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = (props) => {
  return (
    <View>
      <Text h1>Hello World</Text>
      <Text h2>Hello World</Text>
    </View>
  );
};

export default App;
