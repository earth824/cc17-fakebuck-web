import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { RouterProvider } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
