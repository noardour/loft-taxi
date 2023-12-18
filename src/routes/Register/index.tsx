import { Button, FormControl, Link as MUILink, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, FC, useState } from 'react';
import { Form, Link } from 'react-router-dom';

interface RegisterForm {
  email: string;
  password: string;
  repeatPassword: string;
}

const Register: FC = () => {
  const [values, setValues] = useState<RegisterForm>({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
        Регистрация
      </Typography>
      <FormControl component={Form} action="/" sx={{ mb: '33px' }}>
        <TextField name="email" value={values.email} onChange={handleChange} label="Email*" placeholder="mail@mail.com" sx={{ mb: '8px' }} />
        <TextField
          name="password"
          value={values.password}
          onChange={handleChange}
          label="Как вас зовут?*"
          placeholder="имя фамилия"
          sx={{ mb: '8px' }}
        />
        <TextField
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={handleChange}
          label="Придумайте пароль*"
          placeholder="введите пароль"
        />
        <Typography sx={{ alignSelf: 'flex-end', mb: '46px', color: 'secondary.light' }}>Забыли пароль?</Typography>
        <Button type="submit">Зарегистрироваться</Button>
      </FormControl>
      <Typography alignSelf="center" color="secondary.light">
        Уже зарегестрированны?
        <MUILink component={Link} to="/login">
          Войти
        </MUILink>
      </Typography>
    </>
  );
};

export { action } from './action';

export default Register;
