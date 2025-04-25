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
      <Typography className={styles.searchTitle}sx={{ fontFamily: 'Inter', fontWeight: 300}}>
        Лучшие бьюти мастера вашего города здесь!
      </Typography>

      {/* Контейнер поиска */}
      <Box className={styles.searchContainer}>
        <TextField
          variant="standard"
          placeholder="Мастера, салоны, услуги..."
          InputProps={{ disableUnderline: true }}
          className={styles.searchInput} 
          sx={{ fontFamily: 'Inter', fontWeight: 400}}
        />
        <Button className={styles.searchButton}>
          <img className={styles.searchIcon} src={search} alt="search-icon" />
        </Button>
        
      </Box>
      <Box>
      <img src={backgrpic} className={styles.backgrpic}/>
    </Box>
    </Box>
  );
};

export default SearchBar;