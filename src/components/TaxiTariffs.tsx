import { Box, Paper, PaperProps, Typography } from '@mui/material';
import { FC } from 'react';

import standardIMG from '../assets/tariffs/standart.png';
import premiumIMG from '../assets/tariffs/premium.png';
import businessIMG from '../assets/tariffs/business.png';

export type Tariffs = 'standard' | 'premium' | 'business';

interface TaxiTariffProps extends PaperProps {
  title: string;
  price: number;
  image: string;
}

const TaxiTariff: FC<TaxiTariffProps> = ({ title, price, image, sx, ...props }) => (
  <Paper sx={{ width: '118px', p: '12px', ...sx }} {...props} data-testid="taxi-tariff">
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: '16px' }}>{title}</Typography>
      <Typography sx={{ fontSize: '11px', color: 'secondary.light' }}>Стоимость</Typography>
      <Typography sx={{ fontSize: '24px', lineHeight: '15px', mb: '10px' }}>{price} ₽</Typography>
      <Box component="img" src={image} sx={{ width: '95px' }} />
    </Box>
  </Paper>
);

interface TaxiTariffsProps {
  value?: Tariffs;
  onChange?: (value: Tariffs) => void;
}

const tariffs = [
  {
    value: 'standard' as Tariffs,
    title: 'Стандард',
    price: 150,
    image: standardIMG,
  },
  {
    value: 'premium' as Tariffs,
    title: 'Премиум',
    price: 250,
    image: premiumIMG,
  },
  {
    value: 'business' as Tariffs,
    title: 'Бизнес',
    price: 300,
    image: businessIMG,
  },
];

const TaxiTariffs: FC<TaxiTariffsProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      {tariffs.map(({ title, price, image, value: tariffValue }) => (
        <TaxiTariff
          key={title}
          title={title}
          price={price}
          image={image}
          sx={{ cursor: 'pointer', transition: 'opacity 150ms', opacity: tariffValue === value ? 1 : 0.5 }}
          onClick={() => {
            onChange && onChange(tariffValue);
          }}
        />
      ))}
    </Box>
  );
};

export default TaxiTariffs;
