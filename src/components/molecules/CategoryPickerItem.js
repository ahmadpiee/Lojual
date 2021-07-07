import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Icon, AppText} from '..';
import {size} from '../../config';

const CategoryPickerItem = ({item, onPress, size = 80}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={size}
        />
        <AppText style={styles.label} title={item.label} />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: size.ms30,
    paddingVertical: size.ms20,
  },
  label: {
    marginTop: size.ms5,
    textAlign: 'center',
  },
});
