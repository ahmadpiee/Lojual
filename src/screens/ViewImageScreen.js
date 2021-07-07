import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import color from '../config/color';
import size from '../config/size';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const assets = [require('../assets/images/jacket.jpg')];

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Icon name="close" color="white" size={35} style={styles.closeIcon} />
        <Icon
          name="trash-can-outline"
          color="white"
          size={35}
          style={styles.deleteIcon}
        />
      </View>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
        source={assets[0]}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: size.ms40,
    paddingHorizontal: size.ms30,
  },
  closeIcon: {
    width: size.ms50,
    height: size.ms50,
  },
  deleteIcon: {
    width: size.ms50,
    height: size.ms50,
  },
  image: {
    position: 'absolute',
    width: size.wp100,
    height: size.hp100,
    marginVertical: size.ms40,
  },
});
