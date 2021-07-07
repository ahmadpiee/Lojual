import React from 'react';
import {StyleSheet} from 'react-native';

import {color} from '../../../config';
import {AppText} from '../..';

const ErrorMessage = ({error, visible}) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error} title={error} />;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: color.danger,
  },
});
