import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container} from '../components/Container';

export const Screen2 = () => {
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <Container>
      <View>
        <TouchableOpacity onPress={() => handleNav()}>
          <Text>Создать заказ</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
