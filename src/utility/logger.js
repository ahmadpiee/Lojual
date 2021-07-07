import Bugsnag from '@bugsnag/react-native';

const log = error => Bugsnag.notify(error);

const start = () => Bugsnag.start();

export default {
  log,
  start,
};
