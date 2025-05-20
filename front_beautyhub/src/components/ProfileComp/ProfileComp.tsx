import { Typography, Button, Box, Divider } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import styles from "./ProfileComp.module.scss";

const ProfileForm = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.topperTitle}>
        Мой профиль
      </Typography>

      <Divider className={styles.divider} />

      <Box className={styles.profileContainer}>
        <Box component="figure" className={styles.photo}>
          <img src="/profilePhoto.png" alt="Фото профиля" />
        </Box>

        <Box className={styles.info}>
          <Typography variant="h6" className={styles.work}>
            Мастер ногтевого сервиса, топ-мастер
          </Typography>
          <Typography variant="h4" className={styles.fio}>
            Никитина Вероника
          </Typography>
          <Typography variant="subtitle1" className={styles.exp}>
            Стаж 11 лет
          </Typography>

          <Box component="figure" className={styles.photoCarousel}>
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/temp.png" alt={`Фото ${i+1}`} />
            ))}
          </Box>

          <Box className={styles.serviceList}>
            {[
              { name: 'Аппаратный маникюр', price: 550 },
              { name: 'Комбинированный маникюр', price: 550 },
              { name: 'Классический маникюр', price: 450 },
            ].map((service, i) => (
              <Box key={i} className={styles.serviceRow}>
                <Typography className={styles.serviceName}>
                  {service.name}
                </Typography>
                <span className={styles.dots} />
                <Typography className={styles.servicePrice}>
                  {service.price} ₽
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className={styles.workAdress}>
            <Typography variant="h6" className={styles.workName}>
              Салон красоты "BeautyHub"
            </Typography>
            <Typography className={styles.fullAdress}>
              г.Саратов, Волжский район, ул.Вольская 10А
            </Typography>
          </Box>

          <Box className={styles.phoneNumber}>
            <Typography className={styles.telText}>
              Телефон для записи
            </Typography>
            <Box className={styles.phoneBox}>
              <Typography className={styles.number}>
                +7 (937) ХХХ-XXX
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button className={styles.editButton} startIcon={<EditIcon/>}>
          Редактировать
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
