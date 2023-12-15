import { Box, Paper } from '@mui/material';
import VerticalLogo from '../components/VerticalLogo';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const RootAuth: FC = () => (
  <Box sx={{ poslition: 'relative', display: 'flex', height: '100%' }}>
    <Box sx={{ height: '100%', width: '485px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'secondary.main' }}>
      <VerticalLogo />
    </Box>
    <Box sx={{ flex: '1 0 auto', height: '100%' }}>
      <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper sx={{ p: 10, width: '580px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Outlet />
          </Box>
        </Paper>
      </Box>
    </Box>
  </Box>
);

export default RootAuth;
