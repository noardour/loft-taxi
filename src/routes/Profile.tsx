import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import loftTaxiIcon from '../assets/icons/loft-taxi.svg';
import debitCardChip from '../assets/icons/debit-card-chip.svg';
import debitCardIcon from '../assets/icons/debit-card-icon.png';

const Profile: FC = () => (
  <Box sx={{ height: '100%', width: '100%', background: '#0008', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper sx={{ width: '888px', maxWidth: '90%', p: '60px 44px 54px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" sx={{ fontSize: '36px', fontWeight: '700', mb: '10px' }}>
        Профиль
      </Typography>
      <Typography sx={{ color: 'secondary.light', fontSize: '18px', mb: '51px' }}>Ввдеите платежные данные</Typography>

      <Box sx={{ alignSelf: 'stretch', display: 'flex', gap: '100px', mb: '41px' }}>
        <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '26px' }}>
          <TextField label="Имя владельца" />
          <TextField label="Номер карты" />
          <Box sx={{ display: 'flex', gap: '35px' }}>
            <TextField label="MM/YY" />
            <TextField label="CVC" />
          </Box>
        </Box>
        <Paper sx={{ width: '374px', height: '182px', p: '16px', pl: '28px', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box component="img" src={loftTaxiIcon} alt="loft icon" />
            <Typography sx={{ fontSize: '12px' }}>05/08</Typography>
          </Box>
          <Typography sx={{ fontSize: '21px', mt: 'auto', mb: 'auto' }}>5545 2300 3432 4521</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box component="img" src={debitCardChip} />
            <Box component="img" src={debitCardIcon} />
          </Box>
        </Paper>
      </Box>

      <Button>Сохранить</Button>
    </Paper>
  </Box>
);

export default Profile;
