import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {SignInRequest } from "../../../types/auth";
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
          {...register('username', { required: 'Обязательное поле' })}
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
            sx={{textTransform: "none", fontSize: 20, fontWeight: "300", color: "rgba(140, 112, 98)", border: "none", borderRadius:2 ,bgcolor: 'rgba(175, 146, 132, 0.5)' ,'&:hover': {bgcolor: '#E9D9CC'}}}
            disableElevation 
          >
            Вход
          </Button>
        </Box>
      </form>

      <Typography sx={{padding:0, margin:0, marginTop:2}}>
        <Typography sx={{padding:0, paddingBottom:1, margin:0}}>Еще не зарегистрированы?</Typography>
        <Button 
            type="button"
            variant="contained" 
            fullWidth
            size="large"
            href="/register"
            sx={{textTransform: "none", fontSize: 20, fontWeight: "300", color: "rgba(140, 112, 98)", border: "none", borderRadius:2 ,bgcolor: 'rgba(175, 146, 132, 0.25)' ,'&:hover': {bgcolor: '#E9D9CC'}}}
            disableElevation 
          >
            Регистрация
          </Button>
      </Typography>
    </Box>
  );
};

export default Login;
