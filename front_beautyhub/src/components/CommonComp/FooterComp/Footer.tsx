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
              <Box className={styles.footerText} sx={{marginTop: 6}}>
                <Typography className={styles.body1} variant="body1">© 2024 - 2025, BeautyHub</Typography>
                <Typography className={styles.body1} variant="body1">Мы в соцсетях</Typography>
                <div className={styles.icons}>{/*поместить сюда иконки соцсетей (есть в дизайне)*/}</div>

                <Link
                  to={`https://yandex.ru/maps/-/CHv3eILi`} //
                  className={styles.link}
                >
                  <Typography className={styles.body1} variant="body1">г. Саратов, ул. Вольская, 10А</Typography>
                </Link> 
                <Typography className={styles.body1} variant="body1">+7 (937) Х-ХХХ-ХХХ</Typography>
                <Typography className={styles.body1} variant="body1">ежедневно с 9:00 до 21:00</Typography>
              </Box>
            </Grid>
  
            {/* Вторая колонка */}
            <Grid item xs={12} sm={4} className={styles.footerColumn}>
              <Box className={styles.footerText}>
                <Typography variant="h5">О нас</Typography>
                <ul>
                  <li>
                    <Link to={`/sales`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1">Акции</Typography>
                    </Link>
                  </li>

                  <li>
                    <Link to={`/news`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1">Новости</Typography>
                    </Link>
                  </li>

                  <li>
                    <Link to={`/help`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1">Помощь</Typography>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to={`/about-project`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1" >О проекте</Typography>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to={`/project-reviews`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1" >Отзывы о проекте</Typography>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to={`/privacy-policy`} className={styles.link}>
                       <Typography className={styles.body1} variant="body1">Политика конфиденциальности</Typography>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
  
            {/* Третья колонка */}
            <Grid item xs={12} sm={4} className={styles.footerColumn}>
              <Box className={styles.footerText}>
                <Typography variant="h5">Для мастеров</Typography>
                <ul>
                  <li>
                    <Link to={`/project-reviews`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1" >Документация</Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/login`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1" >Вход</Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/register`} className={styles.link}>
                      <Typography className={styles.body1} variant="body1" >Зарегистрироваться</Typography>
                    </Link>
                  </li>
                  <li><Typography className={styles.body1} variant="body1">Пункт 3</Typography></li>
                  <li><Typography className={styles.body1} variant="body1">Пункт 4</Typography></li>
                  <li><Typography className={styles.body1} variant="body1">Пункт 5</Typography></li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </footer>
    );
  };

export default Footer;
