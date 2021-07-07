import React, {useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {color} from '../../config';

const AppSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const newValue = () => setIsEnabled(initialState => !initialState); // onValueChange
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: color.mediumGrey, true: color.secondary}}
        thumbColor={isEnabled ? color.softGrey : color.softGrey}
        ios_backgroundColor={color.secondary}
        value={isEnabled}
        onValueChange={newValue => setIsEnabled(newValue)} // or simply run this code > onValueChange={newValue=>setIsEnabled(neValue)}
      />
    </View>
  );
};

export default AppSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
