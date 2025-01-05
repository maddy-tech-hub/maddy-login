import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Misc/Loader';
import { useIntl } from 'react-intl';

const routes = [
  // { path: '/login', Component: React.lazy(() => import('./components/AuthLinks')) },
  { path: '/', Component: React.lazy(() => import('./pages/LoginPage')) },
  {
    path: '/signup',
    Component: React.lazy(() => import('./pages/SignupPage')),
  },
  {
    path: '/forget',
    Component: React.lazy(() => import('./pages/ForgetPage')),
  },
];

const AppRoutes: React.FC = (): JSX.Element => {
  const intl = useIntl();
  return (
    <React.Suspense fallback={<Loader text={intl.formatMessage({ id: 'loading' })} fullScreen={true}/>}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
