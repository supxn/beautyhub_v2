import { TextField, Button, Box, Typography,  } from "@mui/material";
import styles from "./ProfileComp.module.scss";
import profilePhoto from "./profilePhoto.png"
import EditIcon from '@mui/icons-material/Edit';
import temp from "./temp.png"

const ProfileForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.topperTitle}>
        Мой профиль
      </Typography>

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
      
      <div className={styles.profileContainer} /*ячейка с профилем*/ > 
        <figure className={styles.photo}>
          <img src={profilePhoto} alt="Фото профиля"/>
        </figure>

          <div className={styles.info}>
            <h3 className={styles.work}>Мастер ногтевого сервиса, топ-мастер</h3>
            <h3 className={styles.fio} >Никитина Вероника</h3>
            <h3 className={styles.exp} >Стаж 11 лет</h3>

            <figure className={styles.photoCarousel}>
              <img src={temp} alt="Фото 1"/>
              <img src={temp} alt="Фото 2"/>
              <img src={temp} alt="Фото 3"/>
              <img src={temp} alt="Фото 4"/>
              <img src={temp} alt="Фото 5"/>
            </figure>

            <div className={styles.serviceList}>
              <h4 className={styles.service} >Аппаратный маникюр.......................................550 ₽</h4>
              <h4 className={styles.service} >Комбинированный маникюр...........................550 ₽</h4>
              <h4 className={styles.service} >Классический маникюр....................................450 ₽</h4>
            </div>

            <div className={styles.workAdress}>
              <h3 className={styles.workName} >Салон красоты "BeautyHub"</h3>
              <h3 className={styles.fullAdress} >г.Саратов, Волжский район, ул.Вольская 10А</h3>
            </div>

            <div className={styles.phoneNumber}>
              <h4 className={styles.telText} >Телефон для записи</h4>
              <div className={styles.phoneBox}>
                <h4 className={styles.number} >+7 (937) ХХХ-XXX</h4>
              </div>
            </div>

          </div>

          <div >
          <Button className={styles.editButton}>
            <EditIcon className={styles.editIcon}/>
            Редактировать
          </Button>
          </div>
      </div>

  </div>

);
};

export default ProfileForm;