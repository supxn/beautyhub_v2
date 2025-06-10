import { Typography, Button, Box } from "@mui/material";
import HeartIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./Master.module.scss";
import { MasterType } from "../../../api/types/dto";
import { useState } from "react";
import manik1 from './маник1.jpg';
import manik2 from './маник2.jpg';
import manik3 from './маник3.jpg';
import manik4 from './маник4.jpg';
import manik5 from './маник5.jpg';
import { useFavourites } from './useFavourites';

interface ProfileFormProps {
  master: MasterType;
  categoryOfMaster: string;
}

const MasterProfile = ({ master, categoryOfMaster }: ProfileFormProps) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const { isFavourite, addFavourite, removeFavourite } = useFavourites();
  let services: { name: string; price: number }[] = [];
  if (!categoryOfMaster) {
    // Нет фильтра — показываем все услуги всех категорий мастера
    services = master.categories.flatMap(cat => cat.services);
  } else {
    const category = master.categories.find(cat => cat.category === categoryOfMaster);
    services = category?.services || [];
  }
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
            {[manik1, manik2, manik3, manik4, manik5].map((img, i) => (
              <img key={i} src={img} alt={`Фото маникюр ${i + 1}`} />
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

        <Button className={styles.heartButton} onClick={() => {
          isFavourite(master.phone) ? removeFavourite(master.phone) : addFavourite(master.phone);
        }}>
          {isFavourite(master.phone)
            ? <FavoriteIcon fontSize="medium" style={{ fontSize: 36, color: '#d6004f' }} />
            : <HeartIcon fontSize="medium" style={{ fontSize: 36 }} />}
        </Button>
      </Box>
    </Box>
  );
};

export default MasterProfile;
