import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { RouterProvider } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MainContainer = lazy(() => import('../layouts/MainContainer'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'profile', element: <h1>Profile H1</h1> }
    ]
  },
  { path: '/login', element: <LoginPage /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
