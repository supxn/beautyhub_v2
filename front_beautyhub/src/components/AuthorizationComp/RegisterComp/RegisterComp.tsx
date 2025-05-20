import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signUp } from "../../../api/auth";
import {SignUpRequest} from '../../../types/auth';
import "./RegisterComp.scss";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpRequest>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignUpRequest) => {
    try {
      await signUp(data);
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка регистрации');
    }
  };

  return (
    <Box className="register-container">
      <Typography variant="h5" className="register-title">
        Регистрация
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          {...register('firstName', { required: 'Обязательное поле' })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          margin="normal"
        />
        
        <TextField
          label="Фамилия"
          variant="outlined"
          fullWidth
          {...register('lastName', { required: 'Обязательное поле' })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          margin="normal"
        />
        
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email', { 
            required: 'Обязательное поле',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный email'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          margin="normal"
        />
        
        <TextField
          label="Телефон"
          variant="outlined"
          fullWidth
          {...register('phone', { 
            required: 'Обязательное поле',
            pattern: {
              value: /^[0-9]{11}$/,
              message: 'Формат: 79991234567'
            }
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          margin="normal"
        />
        
        <TextField
          label="Логин"
          variant="outlined"
          fullWidth
          {...register('username', { 
            required: 'Обязательное поле',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов'
            }
          })}
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
            Зарегистрироваться
          </Button>
        </Box>
      </form>

      <Typography sx={{ mt: 2 }}>
        Уже зарегистрированы?{' '}
        <Link component={RouterLink} to="/login">
          Вход
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
