import { TextField, Button, Box, Typography,  } from "@mui/material";
import styles from "./ProfileComp.module.scss";
import profilePhoto from "./profilePhoto.png"

const ProfileForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.topperTitle}>
        Мой профиль
      </Typography>
      <Box              //разделитель под шапкой 
        sx={{
          height: "1px", 
          backgroundColor: "#AF9284", 
          width: "100%" // Ширина разделителя
         }} 
      />
      
      <div className={styles.profileContainer} /*ячейка с профилем*/ > 
        <figure className={styles.profilePhoto}>
          <img src={profilePhoto}  alt="Фото профиля"/>
          
        </figure>
          <div className={styles.profileInfo}>
            <h3>Мастер ногтевого сервиса, топ-мастер</h3>
          </div>
      </div>

  </div>

);
};

export default ProfileForm;