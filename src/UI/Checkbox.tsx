import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Wrapper, Box, Label} from '../styles/styles';

import Check from '../assets/images/check.svg'

interface CheckBoxInt {
  label: string;
  value?: boolean;
  onChange?: (newValue: boolean) => void;
  checkedColor?: string;
  uncheckedColor?: string;
}

const CheckBox: React.FC<CheckBoxInt> = ({
  label,
  value = false,
  onChange,
  checkedColor = '#FF9800',
  uncheckedColor = '#BDBDBD',
}) => {

  const handleChange = () => {
    if (onChange) {
      onChange(!value);
    }
  };

  return (
    <Wrapper>
      <Box
        checked={value}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        onPress={handleChange}>
      {value ? <Check width={15} height={35} fill={checkedColor}/> : null}
      </Box>
      <Label>{label}</Label>
    </Wrapper>
  );
};
export default CheckBox;