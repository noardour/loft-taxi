import logo from '../assets/logo.svg';
import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

interface LogoProps extends BoxProps {}

const Logo: FC<LogoProps> = ({ sx, ...props }) => (
  <Box component="img" sx={{ width: '270px', height: '61px', ...sx }} src={logo} alt="logo" data-testid="logo" {...props} />
);

export default Logo;
