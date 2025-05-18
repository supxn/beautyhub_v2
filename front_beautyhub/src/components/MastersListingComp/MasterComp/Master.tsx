import { TextField, Button, Box, Typography, } from "@mui/material";
import styles from "./Master.module.scss";
import HeartIcon from '@mui/icons-material/FavoriteBorder';
import temp from "./temp.png"
import { MasterType } from "../../../types";
import React, { useState } from "react";

interface ProfileFormProps {
  master: MasterType;
  categoryOfMaster: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ master, categoryOfMaster }) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const categoryObj = master.categories.find(cat => cat.category === categoryOfMaster);
  const displayedServices = categoryObj
    ? showAllServices
      ? categoryObj.services.slice(0, 10)
      : categoryObj.services.slice(0, 3)
    : [];
  const toggleServices = () => {
    setShowAllServices(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer} /*ячейка с профилем*/ >
        <figure className={styles.photo}>
          <img src={master.avatar} alt={`Фото профиля ${master.name}`} />
        </figure>

        <div className={styles.info}>
          <h3 className={styles.work}>{master.work}</h3>
          <h3 className={styles.fio} >{master.name}</h3>
          <h3 className={styles.exp} >Стаж {master.experience} лет</h3>

          <figure className={styles.photoCarousel}>
            {[...Array(5)].map((_, index) => (
              <img key={index} src={temp} alt={`Фото ${index + 1}`} />
            ))}
          </figure>

          <div className={styles.serviceList}>
            {displayedServices.map((service, index) => (
              <div key={index} className={styles.serviceRow}>
                <span className={styles.serviceName}>{service.name}</span>
                <span className={styles.dots}></span>
                <span className={styles.servicePrice}>{service.price} ₽</span>
              </div>
            ))}

            {categoryObj && categoryObj.services.length > 3 && (
              <div
                className={styles.showMore}
                onClick={toggleServices}
              >
                {showAllServices ? "Скрыть" : "Показать еще"}
              </div>
            )}
          </div>
          <div className={styles.workAdress}>
            <h3 className={styles.workName} >Салон красоты "BeautyHub"</h3>
            <h3 className={styles.fullAdress} >{master.address}</h3>
          </div>

          <div className={styles.phoneNumber}>
            <h4 className={styles.telText} >Телефон для записи</h4>
            <div className={styles.phoneBox}>
              <h4 className={styles.number} >{master.phone}</h4>
            </div>
          </div>
        </div>
        <div >
          <Button className={styles.heartButton} >
            <HeartIcon className={styles.heartIcon} fontSize={'large'} />
          </Button>
        </div>
      </div>

    </div>

  );
};

export default ProfileForm;