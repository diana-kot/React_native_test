import React, {forwardRef} from 'react';
import {View} from 'react-native';
import {Colors, spacing} from '../../styles/Colors';

const Divider = forwardRef(({style, enabledSpacing = true}, ref) => {
  return (
    <View
      ref={ref}
      style={[
        {
          height: 1,
          backgroundColor: Colors.black,
          marginHorizontal: enabledSpacing ? spacing.l : 0,
        },
        style,
      ]}
    />
  );
});

export default Divider;
