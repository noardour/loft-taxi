import { Button, FormControl, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEventHandler, FC, useState } from 'react';

import loftTaxiIcon from '../../assets/icons/loft-taxi.svg';
import debitCardChip from '../../assets/icons/debit-card-chip.svg';
import debitCardIcon from '../../assets/icons/debit-card-icon.png';
import { Form } from 'react-router-dom';

interface DebitCardForm {
  owner: string;
  number: string;
  expiringDate: string;
  cvc: string;
}

const Profile: FC = () => {
  const [values, setValues] = useState<DebitCardForm>({
    owner: '',
    number: '',
    expiringDate: '',
    cvc: '',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ height: '100%', width: '100%', background: '#0008', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ width: '888px', maxWidth: '90%', p: '60px 44px 54px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h1" sx={{ fontSize: '36px', fontWeight: '700', mb: '10px' }}>
          Профиль
        </Typography>
        <Typography sx={{ color: 'secondary.light', fontSize: '18px', mb: '51px' }}>Ввдеите платежные данные</Typography>

        <FormControl component={Form} method="post" sx={{ alignItems: 'center' }}>
          <Box sx={{ alignSelf: 'stretch', display: 'flex', gap: '100px', mb: '41px' }}>
            <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '26px' }}>
              <TextField name="owner" value={values.owner} onChange={handleChange} label="Имя владельца" />
              <TextField name="number" value={values.number} onChange={handleChange} label="Номер карты" />
              <Box sx={{ display: 'flex', gap: '35px' }}>
                <TextField name="expiringDate" value={values.expiringDate} onChange={handleChange} label="MM/YY" />
                <TextField name="cvc" value={values.cvc} onChange={handleChange} label="CVC" />
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

          <Button type="submit">Сохранить</Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export { action } from './action';

export default Profile;
