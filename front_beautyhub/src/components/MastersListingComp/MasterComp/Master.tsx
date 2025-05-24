import { Typography, Button, Box } from "@mui/material";
import HeartIcon from '@mui/icons-material/FavoriteBorder';
import styles from "./Master.module.scss";
import { MasterType } from "../../../api/types/dto";
import { useState } from "react";
import temp from './temp.png';

interface ProfileFormProps {
  master: MasterType;
  categoryOfMaster: string;
}

const MasterProfile = ({ master, categoryOfMaster }: ProfileFormProps) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const category = master.categories.find(cat => cat.category === categoryOfMaster);
  const services = category?.services || [];
  const displayedServices = showAllServices ? services.slice(0, 10) : services.slice(0, 3);

  return (
    <Box className={styles.container}>
      <Box className={styles.profileContainer}>
        <Box component="figure" className={styles.photo}>
          <img src={master.avatar} alt={`Фото профиля ${master.name}`} />
        </Box>

        <Box className={styles.info}>
          <Typography variant="h6" className={styles.work}>
            {master.work}
          </Typography>
          <Typography variant="h4" className={styles.fio}>
            {master.name}
          </Typography>
          <Typography variant="subtitle1" className={styles.exp}>
            Стаж {master.experience} лет
          </Typography>

          <Box component="figure" className={styles.photoCarousel}>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={temp} alt={`Фото ${i+1}`} />
            ))}
          </Box>

          <Box className={styles.serviceList}>
            {displayedServices.map((service, i) => (
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

            {services.length > 3 && (
              <Button 
                className={styles.showMore}
                onClick={() => setShowAllServices(!showAllServices)}
              >
                {showAllServices ? "Скрыть" : "Показать еще"}
              </Button>
            )}
          </Box>

          <Box className={styles.workAdress}>
            <Typography variant="h6" className={styles.workName}>
              Салон красоты "BeautyHub"
            </Typography>
            <Typography className={styles.fullAdress}>
              {master.address}
            </Typography>
          </Box>

          <Box className={styles.phoneNumber}>
            <Typography className={styles.telText}>
              Телефон для записи
            </Typography>
            <Box className={styles.phoneBox}>
              <Typography className={styles.number}>
                {master.phone}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button className={styles.heartButton}>
          <HeartIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};

export default MasterProfile;
