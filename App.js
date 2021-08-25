import React from 'react';

import {Text, View} from 'react-native';

import Home from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const App = () => {
  return (
    <View>
      <GuestsScreen />
    </View>
  );
};

export default App;
