import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    TextField
  } from "@mui/material";
  import flowpic from './UslugiFlower.svg'
  import styles from './Header.module.scss'
  
  
  const SearchBar: React.FC = () => {
    return (
        <Box className={styles.headerBox}>
            <Typography className={styles.headerTitle}>
                УСЛУГИ
            </Typography>


            <figure className={styles.photoFigure}>
                <img src={flowpic} className={styles.flowpic}/>
            </figure>

        </Box>
    );
  };
  
  export default SearchBar;


