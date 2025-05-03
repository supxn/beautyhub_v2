import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "./login.module.scss";

const AuthForm = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" className={styles.title} sx={{ fontFamily: 'Inter', fontWeight: 300}}>
        Авторизация
      </Typography>
      <Box 
        sx={{
          display: "flex", 
          justifyContent: "center", // Центрирует горизонтально
          width: "100%", // Убедитесь, что родительский контейнер занимает всю ширину
        }}
        >
          <Box 
            sx={{
              height: "2px", 
              backgroundColor: "#AF9284", 
              width: "100%" // Ширина разделителя
            }} 
          />
      </Box>
      <form className={styles.form}>
        <TextField
          label="Номер телефона или Email"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
          sx={{borderColor: "dark", fontFamily: 'Inter', fontWeight: 300}}
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        
        <Box className={styles.buttons}>
          <Button variant="outlined" className={styles.submitButton} sx={{fontFamily: 'Inter', fontWeight: 300}}>
            Вход
          </Button>
          <Button variant="outlined" className={styles.registerButton} sx={{fontFamily: 'Inter', fontWeight: 300}}>
            Регистрация
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AuthForm;