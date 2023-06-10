import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Colors, sizes } from '../../styles/Colors';

const CustomBackground = ({animatedIndex, style}) => {
  const containerStyle = useAnimatedStyle(() => ({
    ...style,
    backgroundColor: Colors.white,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));
  return <Animated.View style={containerStyle} />;
};

export default CustomBackground;
