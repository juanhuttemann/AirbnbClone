import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('DestinationSearch')}>
          <Fontisto name="search" size={25} color="#f15454" />
          <Text style={styles.searchButtonText}> Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explote btn click')}>
          <Text style={styles.buttonText}>Explore nearby places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
