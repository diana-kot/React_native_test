import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { TextC, AgEnum } from '../../UI/Text';
import {Colors} from '../../styles/Colors';

interface IButton {
  title: string;
  onPress?: () => void;
  marginTop?: number;
}

export const Button = ({title, onPress, marginTop = 16}: IButton) => {
  return (
    <TouchableOpacity style={[styles.button, {marginTop}]} onPress={onPress}>
      <TextC align={'center'} color={Colors.white} Ag={AgEnum.SUBTITLE}>
        {title}
      </TextC>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 29,
    borderRadius: 8,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
