import React from 'react';
import { Routes, Route } from 'react-router-dom';

const routes = [
  { path: '/login', Component: React.lazy(() => import('./pages/LoginPage')) },
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
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
