import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Container} from '../components/Container';

export const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Container>
      <View>
        <Text>ProfileScreen</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text>Главная</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
        <Text>Создать заказ</Text>
      </TouchableOpacity>
    </Container>
  );
};
