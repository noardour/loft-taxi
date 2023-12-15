import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';
import { FC } from 'react';

const Root: FC = () => (
  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Box sx={{ flex: 1 }}>
      <Outlet />
    </Box>
  </Box>
);

export default Root;
