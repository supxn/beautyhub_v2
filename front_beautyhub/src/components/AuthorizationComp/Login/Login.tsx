import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Link, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SignInRequest } from "../../../api/types/auth";
import { signIn } from '../../../api/service/auth';
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const isEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let request: SignInRequest;
      
      if (isEmail(loginInput)) {
        request = { email: loginInput, password };
      } else {
        request = { username: loginInput, password };
      }

      await signIn(request);
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

      <form onSubmit={handleSubmit}>
        <TextField
          label="Логин или почта"
          variant="outlined"
          fullWidth
          value={loginInput}
          onChange={(e) => setLoginInput(e.target.value)}
          error={!!error}
          helperText={error}
          margin="normal"
          required
        />
        
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error}
          margin="normal"
          required
          inputProps={{ minLength: 9 }}
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
