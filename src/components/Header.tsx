import { AppBar, Button, Toolbar, Box, FormControl } from '@mui/material';
import Logo from './Logo';
import { Form, Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" color="secondary" sx={{ paddingTop: '21px', paddingBottom: '21px' }} elevation={0}>
    <Toolbar sx={{ gap: '20px' }}>
      <Box sx={{ flex: 1 }}>
        <Logo />
      </Box>
      <Button component={Link} to="/" variant="text" color="inherit">
        Карта
      </Button>
      <Button component={Link} to="/profile" variant="text" color="inherit">
        Профиль
      </Button>
      <FormControl component={Form} method="post" action="/logout">
        <Button variant="text" color="inherit" type="submit">
          Выйти
        </Button>
      </FormControl>
    </Toolbar>
  </AppBar>
);

export default Header;
