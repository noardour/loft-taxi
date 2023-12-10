import { RouterProvider } from 'react-router-dom';
import styles from './App.module.css';
import Map from './components/Map';
import router from './router';

const App = () => (
  <div className={styles.app}>
    <Map />
    <RouterProvider router={router} />
  </div>
);

export default App;
