import VerticalLogo from '../components/VerticalLogo';
import styles from './RootAuth.module.css';
import { Outlet } from 'react-router-dom';

const RootAuth = () => (
  <div className={styles.wrapper}>
    <div className={styles.sidebar}>
      <VerticalLogo />
    </div>
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
);

export default RootAuth;
