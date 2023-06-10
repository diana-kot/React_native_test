import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {CardItem} from '../components/CardItem';
import {Container} from '../components/Container';
import SearchIcon from '../assets/icons/SearchIcon';

const pizzas = [
  {
    id: 1,
    name: 'Маргарита1',
    price: 390,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/d7bbbc4c74af442e8b9b3ea2faf3c941_292x292.webp',
  },
  {
    id: 2,
    name: 'Маргарита2',
    price: 990,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/d7bbbc4c74af442e8b9b3ea2faf3c941_292x292.webp',
  },
  {
    id: 3,
    name: 'Маргарита3',
    price: 790,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/42360a7dcb7640c998b723231586fe84_292x292.webp',
  },
  {
    id: 4,
    name: 'Маргарита4',
    price: 290,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/3deea5573fc64c28a64ff83477f55eed_292x292.webp',
  },
];

export const Screen1 = () => {
  const [product, setProduct] = useState('');
  const [text, setText] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNav = () => {
    navigation.navigate('Screen2');
  };

  return (
    <SafeAreaView>
      <Container>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={e => setProduct(e)}
                value={product}
              />
              <TouchableOpacity
                onPress={() => {
                  setText(product);
                }}
                style={styles.iconContainer}>
                <SearchIcon />
              </TouchableOpacity>
              {text && <Text>Поиск по {text}</Text>}
            </View>
            <View style={styles.imgContainer}>
              {pizzas.map(item => (
                <CardItem
                  key={item.id}
                  text={item.name}
                  img={item.image}
                  price={item.price}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity onPress={() => handleNav()}>
            <Text style={styles.btnOrder}>Создать заказ</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    </SafeAreaView>
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
    width: 200,
    marginTop: 15,
    height: 200,
    borderRadius: 4,
  },
  btnOrder: {
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
  },
  input: {
    marginTop: 15,
    paddingLeft: 15,
    height: 46,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'orange',
  },
  iconContainer: {
    position: 'absolute',
    top: 18,
    right: 10,
  },
});
