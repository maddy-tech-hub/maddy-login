import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProviders } from './app/providers/AuthProviders';

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <AuthProviders>
      <AppRoutes />
    </AuthProviders>
  </BrowserRouter>
);

export default App;
