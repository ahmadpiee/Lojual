import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {color, size} from '../../config';
import defaultStyles from '../../config/styles';

const AppTextInput = ({
  icon,
  style,
  width = size.up100,
  placeholder,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style, {width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={size.ms22}
          color={color.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={color.mediumGrey}
        placeholder={placeholder}
        numberOfLines={1}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.ms20,
    flexDirection: 'row',
    padding: size.ms15,
  },
  icon: {
    alignSelf: 'center',
    marginRight: size.ms10,
  },
});
