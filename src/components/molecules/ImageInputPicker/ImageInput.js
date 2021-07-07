import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';

import {color, size} from '../../../config';
import defaultStyles from '../../../config/styles';

const ImageInput = ({imageUri, onChangeImage, style, iconName = 'camera'}) => {
  const handlePress = () => {
    if (!imageUri) chooseFromLibrary();
    else {
      Alert.alert('Delete', 'Are you sure want to delete this image?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
    }
  };

  // documentation of Image Crop Picker Library=  https://github.com/ivpusic/react-native-image-crop-picker
  const chooseFromLibrary = async () => {
    try {
      await ImagePicker.openPicker({
        compressImageQuality: 0.5,
        height: 1000,
        width: 1000,
        freeStyleCropEnabled: true,
        cropping: true,
      }).then(image => {
        // console.log(imageUri);
        onChangeImage(image.path);
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, style, defaultStyles.shadow]}>
        {!imageUri && (
          <Icons name={iconName} size={50} color={color.mediumGrey} />
        )}
        {imageUri && (
          <FastImage source={{uri: imageUri}} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.softGrey2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: size.ms100,
    width: size.ms100,
  },
  image: {
    width: size.up100,
    height: size.up100,
  },
});
