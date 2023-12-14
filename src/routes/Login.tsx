import { Box, Button, FormControl, Paper, TextField, Typography, Link as MUILink } from '@mui/material';
import { Link, Form } from 'react-router-dom';

const Login = () => (
  <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Paper sx={{ p: 10, width: '580px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
          Войти
        </Typography>
        <FormControl component={Form} method="post" action="/login" sx={{ mb: '33px' }}>
          <TextField label="Email" placeholder="mail@mail.com" sx={{ mb: '25px' }} />
          <TextField label="Пароль" placeholder="введите пароль" sx={{ mb: '12px' }} />
          <Typography sx={{ alignSelf: 'flex-end', mb: '46px' }}>Забыли пароль?</Typography>
          <Button>Войти</Button>
        </FormControl>
        <Typography alignSelf="center">
          Новый пользователь?
          <MUILink component={Link} to="/register">
            Регистрация
          </MUILink>
        </Typography>
      </Box>
    </Paper>
  </Box>
);

export default Login;
