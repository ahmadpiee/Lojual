import React from 'react';
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {color, size} from '../../../config';
import {AppText} from '../..';

const ListItem = ({
  style,
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponentStart,
  IconComponentEnd,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.lightGrey} onPress={onPress}>
        <View style={[styles.container, style]}>
          {IconComponentStart}
          {image && <FastImage style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            {title && (
              <AppText style={styles.title} title={title} numberOfLines={1} />
            )}
            {subTitle && (
              <AppText
                style={styles.subTitle}
                title={subTitle}
                numberOfLines={2}
              />
            )}
          </View>
          {IconComponentEnd}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: size.ms15,
  },
  detailContainer: {
    justifyContent: 'center',
  },
  image: {
    width: size.ms70,
    height: size.ms70,
    borderRadius: size.ms35,
  },
  title: {
    fontWeight: 'bold',
    maxWidth: size.wp60,
  },
  subTitle: {
    marginTop: 4,
    maxWidth: size.wp60,
    color: color.mediumGrey,
  },
});
