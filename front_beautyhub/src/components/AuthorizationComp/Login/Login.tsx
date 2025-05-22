import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {SignInRequest } from "../../../api/types/auth";
import {signIn} from '../../../api/auth';
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignInRequest>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignInRequest) => {
    try {
      await signIn({
        ...data,
        user_role: "CLIENT" // Или MASTER, в зависимости от логики приложения
      });
      navigate('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка авторизации');
    }
  };

  return (
    <Box className="login-container">
      <Typography variant="h5" className="login-title">
        Авторизация
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Логин или Email"
          variant="outlined"
          fullWidth
          {...register('email', { required: 'Обязательное поле' })}
          error={!!errors.username}
          helperText={errors.username?.message}
          margin="normal"
        />
        
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          {...register('password', { 
            required: 'Обязательное поле',
            minLength: {
              value: 9,
              message: 'Минимум 9 символов'
            }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          margin="normal"
        />
        
        <Box sx={{ mt: 3 }}>
          <Button 
            type="submit"
            variant="contained" 
            fullWidth
            size="large"
          >
            Войти
          </Button>
        </Box>
      </form>

      <Typography sx={{ mt: 2 }}>
        Еще не зарегистрированы?{' '}
        <Link component={RouterLink} to="/register">
          Регистрация
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
