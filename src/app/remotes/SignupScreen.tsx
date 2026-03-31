import React from 'react';
import SignupPage from '@src/pages/SignupPage';
import { AuthProviders } from '../providers/AuthProviders';

const SignupScreen: React.FC = () => (
  <AuthProviders>
    <SignupPage />
  </AuthProviders>
);

export default SignupScreen;
