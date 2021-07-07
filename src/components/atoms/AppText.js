import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {size} from '../../config';

export default function AppText({
  title,
  type = 'Regular',
  color = 'black',
  style,
  ...otherProps
}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `Proxima Nova ${type}`,
      fontSize: size.ms14,
      color: color,
      ...style,
    },
  });
  return (
    <Text style={[styles.textStyle, style]} {...otherProps}>
      {title}
    </Text>
  );
}
