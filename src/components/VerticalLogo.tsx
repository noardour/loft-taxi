import verticalLogo from '../assets/vertical-logo.svg';
import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

interface VerticalLogoProps extends BoxProps {}

const VerticalLogo: FC<VerticalLogoProps> = ({ sx, ...props }) => (
  <Box component="img" src={verticalLogo} alt="logo" sx={{ width: '192px', height: '228px', ...sx }} {...props} />
);

export default VerticalLogo;
