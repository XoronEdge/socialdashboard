import React from 'react';
import './src/Theme';

import {View, Text} from './src/components/base';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App = () => {
  return (
    <View flex center middle color={'grey'}>
      <Text h1>Hello World</Text>
      <Text h2>Hello World</Text>
    </View>
  );
};

export default App;
