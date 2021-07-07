import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import * as Progress from 'react-native-progress';
import {color, size} from '../../config';
import LotiteView from 'lottie-react-native';

const UploadScreen = ({onDone, progress = 0, visible = false}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={color.primary} />
        ) : (
          <LotiteView
            onAnimationFinish={onDone}
            style={styles.animation}
            loop={false}
            autoPlay
            source={require('./../../assets/animations/done.json')}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: size.ms150,
  },
});
