import { Box, Typography } from "@mui/material";
import flowpic from './UslugiFlower.svg';
import styles from './CategoriesHeader.module.scss';

const CategoriesHeader: React.FC = () => {
  return (
    <Box className={styles.headerBox}>
            <Typography className={styles.headerTitle} sx={{ fontFamily: 'Inter', fontWeight: 300, fontStyle: "italic"}}>
                УСЛУГИ
            </Typography>

            <figure className={styles.photoFigure}>
                <img src={flowpic} className={styles.flowpic}/>
            </figure>
    </Box>
  );
};

export default CategoriesHeader;