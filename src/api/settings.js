import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'http://192.168.1.15:9000/api',
  },
  staging: {
    apiUrl: 'http://192.168.1.15:9000/api',
  },
  Production: {
    apiUrl: 'http://192.168.1.15:9000/api',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return staging;
  return settings.Production;
};

export default getCurrentSettings();
