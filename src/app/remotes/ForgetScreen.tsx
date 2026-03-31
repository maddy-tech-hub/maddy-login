import React from 'react';
import ForgetPage from '@src/pages/ForgetPage';
import { AuthProviders } from '../providers/AuthProviders';

const ForgetScreen: React.FC = () => (
  <AuthProviders>
    <ForgetPage />
  </AuthProviders>
);

export default ForgetScreen;
