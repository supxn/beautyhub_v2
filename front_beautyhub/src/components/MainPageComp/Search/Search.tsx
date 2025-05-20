import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  TextField
} from "@mui/material";
import backgrpic from './Background.png'
import search from './SearchIcon.svg'
import styles from './search.module.scss'

const SearchBar: React.FC = () => {
  return (
    <Box className={styles.searchBox}>
      <Box className={styles.textContent}>
        <Typography variant="h3" className={styles.searchTitle}>
          <span>Лучшие бьюти мастера</span>
          <span>вашего города здесь!</span>
        </Typography>

        <Box className={styles.searchContainer}>
          <TextField
            variant="standard"
            placeholder="Мастера, салоны, услуги..."
            InputProps={{ disableUnderline: true }}
            className={styles.searchInput} 
          />
          <Button className={styles.searchButton}>
            <img className={styles.searchIcon} src={search} alt="search-icon" />
          </Button>
        </Box>
      </Box>
      
      <img src={backgrpic} className={styles.backgrpic} alt="background" />
    </Box>
  );
};

export default SearchBar;