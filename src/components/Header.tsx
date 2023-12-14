import { AppBar, Button, Toolbar, Box } from '@mui/material';
import Logo from './Logo';

const Header = () => (
  <AppBar color="secondary" sx={{ paddingTop: '21px', paddingBottom: '21px' }} elevation={0}>
    <Toolbar sx={{ gap: '20px' }}>
      <Box sx={{ flex: 1 }}>
        <Logo />
      </Box>
      <Button variant="text" color="inherit">
        Карта
      </Button>
      <Button variant="text" color="inherit">
        Профиль
      </Button>
      <Button variant="text" color="inherit">
        Выйти
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
