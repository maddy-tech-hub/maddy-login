import React from 'react';
import LoginPage from '@src/pages/LoginPage';
import { AuthProviders } from '../providers/AuthProviders';

const LoginScreen: React.FC = () => (
  <AuthProviders>
    <LoginPage />
  </AuthProviders>
);

export default LoginScreen;
