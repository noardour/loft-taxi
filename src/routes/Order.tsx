import { Box, Button, Paper, TextField } from '@mui/material';
import { FC, useState } from 'react';
import TaxiTariffs, { Tariffs } from '../components/TaxiTariffs';

const Order: FC = () => {
  const [tariff, setTariff] = useState<Tariffs>('standard');

  return (
    <Box sx={{ p: '60px 50px' }}>
      <Paper sx={{ width: '486px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: '25px', gap: '8x' }}>
          <TextField label="Куда" />
          <TextField label="Откуда" />
        </Box>

        <Paper>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: '25px', gap: '30px' }}>
            <TaxiTariffs
              value={tariff}
              onChange={(value) => {
                setTariff(value);
              }}
            />
            <Button>Заказать</Button>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
};

export default Order;
