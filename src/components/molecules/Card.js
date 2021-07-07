import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';

import {size, color} from '../../config';
import defaultStyles from '../../config/styles';
import {AppText} from '..';

const Card = ({title, subTitle, imageUrl, style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, defaultStyles.shadow, style]}>
        <FastImage style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.detailContainer}>
          <AppText
            style={{fontSize: 20, marginBottom: 7}}
            title={title}
            numberOfLines={2}
          />
          <AppText
            style={{fontSize: 20, color: color.secondary, fontWeight: 'bold'}}
            title={subTitle}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: size.ms15,
    backgroundColor: color.white,
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: size.ms20,
  },
  detailContainer: {
    padding: size.ms20,
    alignSelf: 'flex-start',
    marginHorizontal: size.ms12,
  },
  image: {
    width: size.up100,
    height: size.ms200,
  },
});
