import { Box, FormLabel, Paper, Typography } from '@mui/material';
import { ChangeEventHandler, FC } from 'react';

import standardIMG from '../assets/tariffs/standart.png';
import premiumIMG from '../assets/tariffs/premium.png';
import businessIMG from '../assets/tariffs/business.png';

export type TariffsTypes = 'standard' | 'premium' | 'business';

interface ITariff {
  title: string;
  value: TariffsTypes;
  price: number;
  image: string;
}

const tariffs: ITariff[] = [
  {
    title: 'Стандард',
    value: 'standard' as const,
    price: 150,
    image: standardIMG,
  },
  {
    title: 'Премиум',
    value: 'premium' as const,
    price: 250,
    image: premiumIMG,
  },
  {
    title: 'Бизнес',
    value: 'business' as const,
    price: 300,
    image: businessIMG,
  },
];

interface TaxiTariffProps {
  tariff: ITariff;
  name?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TaxiTariff: FC<TaxiTariffProps> = ({ name, checked, tariff, onChange }) => (
  <FormLabel>
    <input type="radio" name={name} value={tariff.value} checked={checked} onChange={onChange} hidden />

    <Paper sx={{ width: '118px', p: '12px', cursor: 'pointer', transition: 'opacity 150ms', opacity: checked ? 1 : 0.5 }} data-testid="taxi-tariff">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '16px' }}>{tariff.title}</Typography>
        <Typography sx={{ fontSize: '11px', color: 'secondary.light' }}>Стоимость</Typography>
        <Typography sx={{ fontSize: '24px', lineHeight: '15px', mb: '10px' }}>{tariff.price} ₽</Typography>
        <Box component="img" src={tariff.image} sx={{ width: '95px', height: '64px' }} />
      </Box>
    </Paper>
  </FormLabel>
);

interface TaxiTariffsProps {
  name: string;
  value?: TariffsTypes;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TaxiTariffs: FC<TaxiTariffsProps> = ({ name, value, onChange }) => {
  return (
    <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      {tariffs.map((tariff) => (
        <TaxiTariff key={tariff.value} tariff={tariff} name={name} checked={tariff.value === value} onChange={onChange} />
      ))}
    </Box>
  );
};

export default TaxiTariffs;
