import React, {useState} from 'react';
import {View} from 'react-native';
import * as Yup from 'yup';

import {size} from '../../config';
import {
  AppFormField,
  SubmitButton,
  AppForm,
  Screen,
  ErrorMessage,
} from '../../components';
import authApi from '../../api/auth';
import useAuth from './useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const Login = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };
  return (
    <Screen>
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error="Invalid emial and/or password"
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboarType="email-address"
          textContentType="emailAddress" // IOS only
          icon="email"
          placeholder="Email"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password" // IOS only
          secureTextEntry
          name="password"
        />
        <View style={{marginVertical: size.ms15}}>
          <SubmitButton title="Login" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default Login;
