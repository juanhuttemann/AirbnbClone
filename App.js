import React from 'react';

import {Text, View} from 'react-native';

import Home from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';

const App = () => {
  return (
    <View>
      <SearchResultsScreen />
    </View>
  );
};

export default App;
