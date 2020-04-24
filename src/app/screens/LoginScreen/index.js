import React, { useCallback, useState } from 'react';

import { ROUTES } from '@constants/routes';

import LoginScreen from './layout';

function LoginContainerScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const onSubmit = useCallback(() => navigation.navigate(ROUTES.Home.name), [navigation]);

  return (
    <LoginScreen
      onSubmit={onSubmit}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      email={email}
      password={password}
    />
  );
}

export default LoginContainerScreen;
