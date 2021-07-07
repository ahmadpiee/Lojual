import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {size} from '../../config';
import {AppText} from '..';

const PickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text} title={item.label} />
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: size.ms20,
  },
});
