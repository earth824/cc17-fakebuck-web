import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { RouterProvider } from 'react-router-dom';
import ProtectedRoute from '../features/authentication/components/ProtectedRoute';
import RedirectIfLogged from '../features/authentication/components/RedirectIfLogged';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MainContainer = lazy(() => import('../layouts/MainContainer'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'profile', element: <h1>Profile H1</h1> }
    ]
  },
  {
    path: '/login',
    element: (
      <RedirectIfLogged>
        <LoginPage />
      </RedirectIfLogged>
    )
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
