import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    TextField
  } from "@mui/material";
import FilterIcon from '@mui/icons-material/Tune';
import styles from './Header.module.scss'
  
  
  const Header: React.FC = () => {
    return (
        <Box className={styles.headerBox}>
            <div className={styles.title}>
            <Typography variant="h6" className={styles.crumbs}>
                Маникюр - Аппаратный маникюр
            </Typography>

            <Typography variant="h2" className={styles.topperTitle}>
                Мастера маникюра
            </Typography>

            {/* ФИЛЬТРЫ */}
            <Box className={styles.filtersContainer} sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2
              }}>
                <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "7px",
                      backgroundColor: "#F7EFE9",
                      color: "#5C4033",
                      border: "none",
                      paddingX:1,
                      paddingY:1
                    }}
                  >
                    <FilterIcon />
                  </Button>
                {["Рейтинг", "Опыт работы", "Место приема", "Пол мастера"].map((filter, idx) => (
                  <Button
                    key={idx}
                    variant="outlined"
                    sx={{
                      borderRadius: "7px",
                      backgroundColor: "#F7EFE9",
                      color: "#5C4033",
                      border: "none",
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "20px",
                      paddingX: 2.5,
                      paddingY: 1,
                      "&:hover": {
                        backgroundColor: "#F5EBE2"
                      }
                    }}
                  >
                    {filter}
                  </Button>
                ))}
              </Box>
            </div>
            
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
                  width: "100%",
                }}
              />
            </Box>
            
            

        </Box>
    );
  };
  
  export default Header;


