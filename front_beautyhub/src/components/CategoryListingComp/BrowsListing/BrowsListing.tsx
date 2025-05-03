import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  TextField
} from "@mui/material";

import lami from './Лами.jpg'
import okrash from './Окрашивание.jpg'
import tatuaj from './Татуаж.jpg'

import styles from './BrowsListing.module.scss'

const Lashes: React.FC = () => {
    return(
    <div className={styles.brows}>
      {/* Разделитель */}
      <Box 
        sx={{
          display: "flex", 
          justifyContent: "center",
          width: "100%",
        }}
      >
          <Box
            sx={{
              height: "1px", 
              backgroundColor: "#AF9284", 
              width: "85%",
            }}
          />
        </Box>

        <h3>Оформление бровей</h3>
        <p>от 300₽</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={lami} alt="Ламинирование" />
            <h4>Ламинирование</h4>
            <ul>
              <li>Классическая коррекция</li>
              <li>Счастье для бровей</li>
            </ul>
          </div>
          <div className={styles.card}>
            <img src={okrash} alt="Окрашивание" />
            <h4>Окрашивание</h4>
            <ul>
              <li>Осветление</li>
              <li>Протеиновая реконструкция</li>
            </ul>
          </div>
          <div className={styles.card}>
            <img src={tatuaj} alt="Татуаж" />
            <h4>Татуаж</h4>
            <ul>
              <li>Вельвет</li>
            </ul>
          </div>
        </div>
    </div>
    );
}

export default Lashes;

