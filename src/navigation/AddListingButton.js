import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {color, size} from '../config';
import defaultStyles from '../config/styles';

const AddListingButton = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, defaultStyles.shadow]}>
        <MCIcon
          name="pencil-plus-outline"
          size={size.ms25}
          color={color.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
    borderColor: color.white,
    borderRadius: size.ms30,
    borderWidth: 4,
    height: size.ms50,
    width: size.ms50,
  },
});
