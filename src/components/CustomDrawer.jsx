import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Colors } from '../styles/Colors';

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {

  const Img = {
    bgPattern: require('../assets/images/drawer-cover.jpeg'),
    user: require('../assets/images/user.png'),
  };


  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={Img.bgPattern} style={{height: 140}}>
        <Image source={Img.user} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
