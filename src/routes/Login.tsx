import { Button, FormControl, TextField, Typography, Link as MUILink } from '@mui/material';
import { FC } from 'react';
import { Link, Form } from 'react-router-dom';

const Login: FC = () => (
  <>
    <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
      Войти
    </Typography>
    <FormControl component={Form} method="get" action="/" sx={{ mb: '33px' }}>
      <TextField label="Email" placeholder="mail@mail.com" sx={{ mb: '8px' }} />
      <TextField label="Пароль" placeholder="введите пароль" />
      <Typography sx={{ alignSelf: 'flex-end', mb: '46px', color: 'secondary.light' }}>Забыли пароль?</Typography>
      <Button type="submit">Войти</Button>
    </FormControl>
    <Typography alignSelf="center" color="secondary.light">
      Новый пользователь?
      <MUILink component={Link} to="/register">
        Регистрация
      </MUILink>
    </Typography>
  </>
);

export default Login;
