import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link, Alert, RadioGroup,
  FormLabel,
  FormControl, FormControlLabel, Radio } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { signUp } from "../../../api/auth";
import {SignUpRequest} from '../../../api/types/auth';
import "./RegisterComp.scss";

const SquareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="white" stroke="#8C7062" strokeWidth="2"/>
  </svg>
);

const CheckedSquareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#6B584D" stroke="#6B584D" strokeWidth="2"/>
    <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

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
        {/* Добавляем блок выбора роли */}
        <FormControl 
  component="fieldset" 
  fullWidth 
  sx={{ 
    mb: 3,
    p: 2,
    backgroundColor: '#EFE5DC',
    borderRadius: '8px',
    border: '1px solid #D2BEB3'
  }}
>
  <FormLabel component="legend" sx={{ 
    color: '#6B584D', 
    fontWeight: 500,
    fontSize: '1rem',
    mb: 1
  }}>
    Выберите тип аккаунта
  </FormLabel>
  
  <RadioGroup row sx={{ gap: 4, mt: 1 }}>
    <FormControlLabel
      value="CLIENT"
      control={
        <Radio 
          {...register('role', { required: true })}
          icon={<SquareIcon />}
          checkedIcon={<CheckedSquareIcon />}
          sx={{
            color: '#8C7062',
            '&.Mui-checked': { color: '#6B584D' },
            padding: 0,
            mr: 1
          }}
        />
              }
              label="Клиент"
              sx={{ 
                color: '#6B584D',
                margin: 0,
                '& .MuiFormControlLabel-label': {
                  fontSize: '1rem',
                  fontWeight: 500
                }
              }}
            />
            
            <FormControlLabel
              value="MASTER"
              control={
                <Radio 
                  {...register('role', { required: true })}
                  icon={<SquareIcon />}
                  checkedIcon={<CheckedSquareIcon />}
                  sx={{
                    color: '#8C7062',
                    '&.Mui-checked': { color: '#6B584D' },
                    padding: 0,
                    mr: 1
                  }}
                />
              }
              label="Мастер"
              sx={{ 
                color: '#6B584D',
                margin: 0,
                '& .MuiFormControlLabel-label': {
                  fontSize: '1rem',
                  fontWeight: 500
                }
              }}
            />
          </RadioGroup>
          
          {errors.role && (
            <Typography variant="caption" color="error" sx={{ mt: 1 }}>
              Выберите тип аккаунта
            </Typography>
          )}
        </FormControl>

      
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
          label="Номер телефона"
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
            sx={{textTransform: "none", fontSize: 20, fontWeight: "300", color: "rgba(140, 112, 98)", border: "none", borderRadius:2 ,bgcolor: 'rgba(175, 146, 132, 0.5)' ,'&:hover': {bgcolor: '#E9D9CC'}}}
            disableElevation 
          >
            Зарегистрироваться
          </Button>
        </Box>
      </form>

      <Typography sx={{padding:0, margin:0, marginTop:2}}>
              <Typography sx={{padding:0, paddingBottom:1, margin:0}}>Уже зарегистрированы?</Typography>
              <Button 
                  type="button"
                  variant="contained" 
                  fullWidth
                  size="large"
                  href="/login"
                  sx={{textTransform: "none", fontSize: 20, fontWeight: "300", color: "rgba(140, 112, 98)", border: "none", borderRadius:2 ,bgcolor: 'rgba(175, 146, 132, 0.25)' ,'&:hover': {bgcolor: '#E9D9CC'}}}
                  disableElevation 
                >
                  Вход
                </Button>
            </Typography>
    </Box>
  );
};

export default RegisterForm;
