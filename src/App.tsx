import { RouterProvider } from 'react-router-dom';
import styles from './App.module.css';
import Map from './components/Map';
import router from './router';

const App = () => (
  <div className={styles.app}>
    <Map />

    {/* workaround for map which overlap the map becose of "position: absolute" */}
    <div className={styles.content}>
      <RouterProvider router={router} />
    </div>
  </div>
);

export default App;
