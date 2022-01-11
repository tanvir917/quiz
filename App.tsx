import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/containers/Home';

Icon.loadFont();

const App = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default App;
