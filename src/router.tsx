import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import RootAuth from './routes/RootAuth';
import Login from './routes/Login';
import Register from './routes/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
