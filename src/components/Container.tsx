import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Container = (props: any) => {
  const {children, shownArrow = true} = props;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <View style={{paddingVertical: 1, marginLeft: 0}}>
        {shownArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Назад</Text>
          </TouchableOpacity>
        )}

        <View style={{paddingHorizontal: 8}}>{children}</View>
      </View>
    </View>
  );
};
