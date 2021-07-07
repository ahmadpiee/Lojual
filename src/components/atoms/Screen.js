import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
} from 'react-native';

import {size, color} from '../../config';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: size.ms12,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
