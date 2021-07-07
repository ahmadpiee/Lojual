import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import {AppText} from '..';
import {color, size} from '../../config';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText title="No Internet Connection" color={color.white} />
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: StatusBar.currentHeight,
    backgroundColor: color.danger,
    height: size.ms50,
    width: size.up100,
    position: 'absolute',
    zIndex: 1,
  },
});
