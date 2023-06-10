import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '../Icon';
import {Colors, sizes, shadow} from '../../styles/Colors';

interface IFavoriteButton {
  active?: string;
  onPress?: () => void;
  style?: any;
}

const FavoriteButton = ({active, style, onPress}: IFavoriteButton) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: Colors.white,
            padding: 4,
            borderRadius: sizes.radius,
          },
          shadow.light,
        ]}>
        <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
