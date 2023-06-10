import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Colors, sizes, spacing} from '../../styles/Colors';
import * as Animatable from 'react-native-animatable';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import CustomHandler from './CustomHandler';

import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import Divider from './Divider';

const AnimatedDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({trip}) => {
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ['30%', '80%'], []);

  const titleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [Colors.white, Colors.blue],
    ),
    marginBottom: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const locationStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [Colors.white, Colors.black],
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP,
    ),
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animatedIndex.value,
          [0, 0.08],
          [40, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  return (
    <BottomSheet
      index={0}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      // backgroundComponent={CustomBackground}
      handleComponent={CustomHandler}>
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}>
        <Animated.Text style={[styles.title, titleStyle]}>
          {trip.title}
        </Animated.Text>
        <View style={styles.location}>
          <Animated.Text style={[styles.locationText, locationStyle]}>
            {trip.location}
          </Animated.Text>
        </View>
      </Animatable.View>
      <AnimatedDivider style={contentStyle} />
      <BottomSheetScrollView
        style={styles.scrollBox}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Animated.View style={contentStyle}>
          <View style={styles.summary}>
            <Text style={styles.summaryText}>{trip.description}</Text>
          </View>
        </Animated.View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: Colors.black,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: sizes.title,
    color: Colors.white,
  },
  locationIcon: {
    tintColor: Colors.black,
  },
  scrollBox: {
    marginTop: spacing.s,
    marginBottom: spacing.m,
  },
  sectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: Colors.black,
    fontWeight: 'normal',
  },
  summary: {
    marginHorizontal: spacing.l,
  },
  summaryText: {
    color: Colors.black,
  },
  rating: {
    marginHorizontal: spacing.l,
  },
});

export default TripDetailsCard;
