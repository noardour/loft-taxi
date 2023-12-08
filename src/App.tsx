import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Outlet />
  </div>
);

export default App;
