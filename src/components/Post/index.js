import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  const {bed, bedrooms, type, title, oldPrice, newPrice, totalPrice, image} =
    post;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.bedrooms}>
        {bed} bed {bedrooms} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {type}. {title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.price}> ${newPrice}</Text> / night
      </Text>

      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  );
};

export default Post;
