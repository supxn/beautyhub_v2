import { Box, Button } from "@mui/material";
import styles from "./notFound.module.scss";
import rose from "./rose.png"

const NotFoundPage: React.FC = () => {
    return(
        <Box className={styles.developingContainer}>
            <div className={styles.errorNumText}>404</div>
            <div className={styles.notFoundText}>Страница не найдена</div> 
            <Button  variant="contained" sx={{textTransform: "none", fontSize: 20, fontWeight: "light", marginTop: 2.5, marginBottom: 10 , padding: 1, paddingLeft: 4 , paddingRight: 4 , border: 3 , borderColor: 'secondary.light', borderRadius: 2.5 ,bgcolor: 'primary.light', '&:hover': {bgcolor: '#E9D9CC'}}}
                 disableElevation href="/" className={styles.mainPageButton}>Перейти на главную</Button>
        </Box>
    );
}

export default NotFoundPage