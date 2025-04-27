import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "./RegisterComp.module.scss";

const AuthForm = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h5" className={styles.title} sx={{fontFamily: 'Inter', fontWeight: 300}}>
        Регистрация
      </Typography>
      <Box 
      sx={{
        display: "flex", 
        justifyContent: "center", // Центрирует горизонтально
        width: "100%",            // Убедитесь, что родительский контейнер занимает всю ширину
      }}
      >
        <Box              //разделитель под Авторизация 
          sx={{
            height: "1px", 
            backgroundColor: "#AF9284", 
            width: "100%" // Ширина разделителя
            
          }} 
        />
    </Box>
      <form className={styles.form}>
        <TextField
          label="Имя"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
          sx={{fontFamily: 'Inter', fontWeight: 300}}
        />
        <TextField
          label="Фамилия"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Отчество"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Номер телефона"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        <TextField
          label="Повторите пароль"
          type="password"
          variant="outlined"
          fullWidth
          className={styles.input}
          margin="normal"
        />
        
        <Box className={styles.buttons}>
          <Button variant="outlined" className={styles.registerButton} sx={{fontFamily: 'Inter', fontWeight: 300}}>
            Зарегистрироваться
          </Button>
        </Box>
      </form>
    </Box>
    );
 };
  
  export default AuthForm;