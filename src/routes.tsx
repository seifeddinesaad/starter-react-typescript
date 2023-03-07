import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoadingScreen from './components/Loading';
import { pageLoader } from './utils/lazyImport';
import { IRouteItem } from './types/routes';
import AuthGuard from './layouts/guards/AuthGuard';
import DashboardLayout from './layouts/DashboardLayout';
import GuestGuard from './layouts/guards/GuestGuard';
import Error from './pages/Error/index';
import Main from './layouts/Main';
export const renderRoutes = (routes: IRouteItem[] = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {/* <Route path="/" element={<DashboardLayout />}> */}
      {routes.map((route, index) => {
        const Component = route.component;
        const Guard = route.guard;
        const Layout = route.layout || <></>;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                {/* <Guard> */}
                <Main>
                  <Component />
                </Main>

                {/* </Guard> */}
              </Layout>
            }
          />
        );
      })}
      <Route path="*" element={<Error />} />
      {/* </Route> */}
    </Routes>
  </Suspense>
);

const routes: IRouteItem[] = [
  {
    exact: true,
    path: '/home',
    component: lazy(pageLoader(() => import('./pages/Home'))),
    guard: AuthGuard,
    layout: DashboardLayout,
  },
  {
    exact: true,
    path: '/about',
    component: lazy(pageLoader(() => import('./pages/About'))),
    guard: GuestGuard,
    layout: DashboardLayout,
  },
];

export default routes;
