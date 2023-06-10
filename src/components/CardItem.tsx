import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

export const CardItem = ({text, img, price}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Вы выбрали:', text)}
      style={styles.card}>
      <Image style={styles.image} source={{uri: img}} />
      <Text>{text}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    marginTop: 15,
    height: 180,
    borderRadius: 4,
  },
  card: {
    width: '50%',
  },

});
