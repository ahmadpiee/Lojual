import React from 'react';
import {StyleSheet, View} from 'react-native';

import {color, size} from '../../../config';

const ListItemSeparator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: size.wp90,
    alignSelf: 'center',
    backgroundColor: color.softGrey,
  },
});
