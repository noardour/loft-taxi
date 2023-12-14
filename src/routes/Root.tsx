import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';

const Root = () => (
  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Box sx={{ flex: 1 }}>
      <Outlet />
    </Box>
  </Box>
);

export default Root;
