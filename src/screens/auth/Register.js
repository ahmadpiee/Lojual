import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import usersApi from '../../api/users';
import authApi from '../../api/auth';
import useAuth from '../auth/useAuth';
import useApi from '../../hooks/useApi';
import {color, size} from '../../config';
import {
  AppFormField,
  SubmitButton,
  AppForm,
  Screen,
  ActivityIndicator,
  ErrorMessage,
} from '../../components';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function Register() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async userInfo => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result);
      }
      return;
    }
    const {data: authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password,
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
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
            <SubmitButton
              title="Register"
              backgroundColor={color.secondary}
              borderColor={color.secondary}
            />
          </View>
        </AppForm>
      </Screen>
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: size.ms20,
  },
});
