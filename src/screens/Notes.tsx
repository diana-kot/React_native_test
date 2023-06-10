import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Container} from '../components/Container';

export const Notes = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>Перейти в профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Text>Перейти в SearchScreen</Text>
      </TouchableOpacity>
    </Container>
  );
};
