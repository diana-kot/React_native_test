
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Colors = {
  black: '#000000',
  gray: '#999999',
  light_gray: '#FAFAFA',
  white: '#fff',
  green: '#70C050',
  blue: '#1FA1FF',
  red: 'red',
};


export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};


export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};


export const shadow = {
  light: {
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: Colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};
