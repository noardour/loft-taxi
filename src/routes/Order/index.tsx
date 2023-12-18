import { Box, Button, FormControl, Paper, TextField } from '@mui/material';
import { ChangeEventHandler, FC, useState } from 'react';
import TaxiTariffs, { TariffsTypes } from '../../components/TaxiTariffs';
import { Form } from 'react-router-dom';

interface OrderForm {
  from: string;
  to: string;
  tariff: TariffsTypes;
}

const Order: FC = () => {
  const [values, setValues] = useState<OrderForm>({
    from: '',
    to: '',
    tariff: 'standard',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ p: '60px 50px' }}>
      <Paper sx={{ width: '486px' }}>
        <FormControl component={Form} method="post" sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', p: '25px', gap: '8x' }}>
            <TextField name="from" value={values.from} onChange={handleChange} label="Куда" />
            <TextField name="to" value={values.to} onChange={handleChange} label="Откуда" />
          </Box>

          <Paper>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: '25px', gap: '30px' }}>
              <TaxiTariffs name="tariff" value={values.tariff} onChange={handleChange} />
              <Button type="submit">Заказать</Button>
            </Box>
          </Paper>
        </FormControl>
      </Paper>
    </Box>
  );
};

export { action } from './action';

export default Order;
