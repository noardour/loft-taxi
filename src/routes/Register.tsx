import { Button, FormControl, Link as MUILink, TextField, Typography } from '@mui/material';
import { Form, Link } from 'react-router-dom';

const Register = () => (
  <>
    <Typography variant="h4" sx={{ alignSelf: 'center', fontWeight: 'bold', mb: '57px' }}>
      Регистрация
    </Typography>
    <FormControl component={Form} action="/" sx={{ mb: '33px' }}>
      <TextField label="Email*" placeholder="mail@mail.com" sx={{ mb: '8px' }} />
      <TextField label="Как вас зовут?*" placeholder="имя фамилия" sx={{ mb: '8px' }} />
      <TextField label="Придумайте пароль*" placeholder="введите пароль" />
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

export default Register;
