import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import RootAuth from './routes/RootAuth';
import Login from './routes/Login';
import Register from './routes/Register';
import Order from './routes/Order';
import Profile from './routes/Profile';
import { action as logoutAction } from './routes/logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Order />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: '/logout',
        action: logoutAction,
      },
    ],
  },
  {
    element: <RootAuth />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
