import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, sizes, spacing} from '../../styles/Colors';
import Icon from '../../components/Icon';

import TripDetailsCard from '../../components/TripDetailsCard/TripDetailsCard';

import FavoriteButton from '../../components/ui/FavoriteButton';

const TripDetailsScreen = ({navigation, route}) => {
  const {trip} = route.params;

  return (
    <View style={styles.container}>
      {/* <Icon
        icon="ArrowLeft"
        style={styles.backIcon}
        onPress={navigation.goBack}
      /> */}

      <FavoriteButton onPress={() => {}} />
{/* 
      <TripDetailsCard trip={trip} /> */}
    </View>
  );
};

// TripDetailsScreen.sharedElements = route => {
//   const {trip} = route.params;
//   return [
//     {
//       id: `trip.${trip.id}.image`,
//     },
//   ];
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    right: spacing.l,
    zIndex: 1,
  },
  backIcon: {
    tintColor: Colors.white,
  },
});

export default TripDetailsScreen;
