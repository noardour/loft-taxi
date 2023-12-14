import { Box, Paper } from '@mui/material';
import VerticalLogo from '../components/VerticalLogo';
import styles from './RootAuth.module.css';
import { Outlet } from 'react-router-dom';

const RootAuth = () => (
  <div className={styles.wrapper}>
    <div className={styles.sidebar}>
      <VerticalLogo />
    </div>
    <div className={styles.content}>
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ p: 10, width: '580px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Outlet />
          </Box>
        </Paper>
      </Box>
    </div>
  </div>
);

export default RootAuth;
