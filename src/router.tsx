import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import RootAuth from './routes/RootAuth';
import Login, { action as loginAction } from './routes/Login';
import Register, { action as registerAction } from './routes/Register';
import Order, { action as orderAction } from './routes/Order';
import Profile, { action as profileAction } from './routes/Profile';
import { action as logoutAction } from './routes/logout';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            action: orderAction,
            element: <Order />,
          },
          {
            path: 'profile',
            action: profileAction,
            element: <Profile />,
          },
          {
            path: 'logout',
            action: logoutAction,
          },
        ],
      },
    ],
  },
  {
    element: <RootAuth />,
    children: [
      {
        path: '/login',
        action: loginAction,
        element: <Login />,
      },
      {
        path: '/register',
        action: registerAction,
        element: <Register />,
      },
    ],
  },
]);

export default router;
