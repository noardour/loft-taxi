import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Map from './components/Map';
import Header from './components/Header';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Map />
    <Outlet />
  </div>
);

export default App;
