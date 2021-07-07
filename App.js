import React, {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import OfflineNotice from './src/components/molecules/OfflineNotice';
import AuthContext from './src/screens/auth/context';
import authStorage from './src/screens/auth/storage';

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const restoreUser = async () => {
      const user = await authStorage.getUser();
      if (user) setUser(user);
    };
    restoreUser();
  }, []);

  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
