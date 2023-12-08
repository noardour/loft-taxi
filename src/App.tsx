import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Map from './components/Map';

const App = () => (
  <div className={styles.app}>
    <Map />
    <Outlet />
  </div>
);

export default App;
