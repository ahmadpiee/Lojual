import {DefaultTheme} from '@react-navigation/native';

import {color} from '../config';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    background: color.white,
  },
};
