import { Button, FormControl, TextField, Typography, Link as MUILink } from '@mui/material';
import { Link, Form } from 'react-router-dom';

const Login = () => (
  <>
    <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
      Войти
    </Typography>
    <FormControl component={Form} method="post" action="/login" sx={{ mb: '33px' }}>
      <TextField label="Email" placeholder="mail@mail.com" sx={{ mb: '8px' }} />
      <TextField label="Пароль" placeholder="введите пароль" />
      <Typography sx={{ alignSelf: 'flex-end', mb: '46px' }}>Забыли пароль?</Typography>
      <Button>Войти</Button>
    </FormControl>
    <Typography alignSelf="center">
      Новый пользователь?
      <MUILink component={Link} to="/register">
        Регистрация
      </MUILink>
    </Typography>
  </>
);

export default Login;
