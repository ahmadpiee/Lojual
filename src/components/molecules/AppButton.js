import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {color, size} from '../../config';
import {AppText} from '..';

export default function AppButton({
  title,
  onPress,
  disabled = false,
  backgroundColor = color.primary,
  buttonStyle,
  containerStyle,
  borderColor = color.primary,
  titleColor = 'white',
  style,
}) {
  return (
    <View
      style={[
        {justifyContent: 'center', paddingVertical: size.ms10, containerStyle},
        style,
      ]}>
      <TouchableOpacity
        style={
          disabled
            ? [
                styles.button,
                {backgroundColor: color.black, borderColor: color.black},
              ]
            : [
                styles.button,
                {backgroundColor: backgroundColor, borderColor: borderColor},
                buttonStyle,
              ]
        }
        onPress={onPress}
        disabled={disabled}>
        <AppText title={title} style={styles.text} color={titleColor} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: size.ms11,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
