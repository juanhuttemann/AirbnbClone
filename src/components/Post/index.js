import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Ex sint quis fugiat nostrud deserunt voluptate est amet tempor dolore.
        Laboris dolore ullamco ad laborum excepteur nostrud qui adipisicing
        minim officia ea et. Velit incididunt exercitation mollit consequat do
        fugiat sunt sint cupidatat est dolor.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text> / night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
