import { Button, FormControl, TextField, Typography, Link as MUILink } from '@mui/material';
import { ChangeEventHandler, FC, useState } from 'react';
import { Link, Form } from 'react-router-dom';

interface LoginForm {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [values, setValues] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
        Войти
      </Typography>
      <FormControl component={Form} method="post" sx={{ mb: '33px' }}>
        <TextField name="email" value={values.email} onChange={handleChange} label="Email" placeholder="mail@mail.com" sx={{ mb: '8px' }} />
        <TextField name="password" value={values.password} onChange={handleChange} label="Пароль" placeholder="введите пароль" />
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
};

export { action } from './action';

export default Login;
