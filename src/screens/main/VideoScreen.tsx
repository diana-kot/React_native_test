import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { Colors } from '../../styles/Colors';

import TripsList from '../../components/TripsList';

import {PLACES} from '../../assets/data/placesList';

export const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
});
