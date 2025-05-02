import React from 'react';
import { Grid, Typography, Box, ListItem } from '@mui/material';
import { Link } from "react-router-dom";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <Box className={styles.footerContainer}>
          <Grid container spacing={4} justifyContent="space-between">
            {/* Первая колонка */}
            <Grid item xs={12} sm={4} className={styles.footerColumn}>
              <Box className={styles.footerText} >
                <Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>© 2024 - 2025, BeautyHub</Typography>
                <Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Мы в соцсетях</Typography>
                <div className={styles.icons}>{/*поместить сюда иконки соцсетей (есть в дизайне)*/}</div>

                <Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>г. Саратов, ул. Вольская, 10А</Typography>
                <Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>+7 (937) Х-ХХХ-ХХХ</Typography>
                <Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>ежедневно с 9:00 до 21:00</Typography>
              </Box>
            </Grid>
  
            {/* Вторая колонка */}
            <Grid item xs={12} sm={4} className={styles.footerColumn}>
              <Box className={styles.footerText}>
                <Typography variant="h5"sx={{ fontFamily: 'Inter', fontWeight: 600}}>О нас</Typography>
                <ul>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Акции</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Новости</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Помощь</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>О проекте</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Отзывы о проекте</Typography></li>
                  <Link
                    to={`/privacy-policy`} // динамически подставляем якорь
                    className={styles.link}
                    style={{ display: 'block' }} // чтобы картинка была кликабельной по всей области
                    >
                       <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Политика конфиденциальности</Typography></li>
                  </Link>
                </ul>
              </Box>
            </Grid>
  
            {/* Третья колонка */}
            <Grid item xs={12} sm={4} className={styles.footerColumn}>
              <Box className={styles.footerText}>
                <Typography variant="h5"sx={{ fontFamily: 'Inter', fontWeight: 600}}>Для мастеров</Typography>
                <ul>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Документация</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Зарегистрироваться</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Пункт 3</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Пункт 4</Typography></li>
                  <li><Typography className={styles.body1} variant="body1" sx={{ fontFamily: 'Inter', fontWeight: 400}}>Пункт 5</Typography></li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer>
    );
  };

export default Footer;
