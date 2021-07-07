import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {size, color} from '../../config';
import {AppText, AppButton, Screen} from '../../components';
import routes from '../../navigation/routes';

const assets = [require('../../assets/images/icon.png')];

const WelcomeScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <FastImage style={styles.logo} source={assets[0]} />
        <AppText title="Lo jual gua beli" style={styles.title} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.loginButton}>
          <AppButton
            title="LOGIN"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        </View>
        <AppButton
          backgroundColor={color.secondary}
          borderColor={color.secondary}
          title="REGISTER"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: size.ms50,
  },
  logo: {
    width: size.ms200,
    height: size.ms200,
  },
  title: {
    alignSelf: 'center',
    color: color.black,
    fontSize: size.ms20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    padding: size.ms12,
    width: size.wp100,
    paddingVertical: size.ms30,
  },
  loginButton: {
    marginBottom: size.ms20,
  },
});
