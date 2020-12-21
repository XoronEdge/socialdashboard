import React from 'react';
import {Text} from 'react-native';
import './src/Theme';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = (props) => {
  return <Text>Hello World</Text>;
};

export default App;
