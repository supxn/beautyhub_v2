import { Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom
import imgBrow from './brows.jpg';
import imgManic from './nails.jpg';
import imgLashes from './lashes.jpg';

import styles from './servicesgrids.module.scss';

const services = [
  {
    image: imgBrow,
    title: "Брови",
    description: [
      "Классическая коррекция", 
      "Ламинирование бровей",
      "Окрашивание бровей",
      '"Счастье для бровей"',
      "Вельвет",
      "Еще..."
    ],
    extras: ["Косметология", "Макияж", "Массаж"]
  },
  {
    image: imgManic,
    title: "Маникюр",
    description: [
      "Аппаратный маникюр", "Корейский маникюр", 
      "Педикюр", "Наращивание ногтей", 
      "Классический маникюр", "Еще..."
    ],
    extras: ["Парикмахер", "Пирсинг", "Спа-процедуры"]
  },
  {
    image: imgLashes,
    title: "Ресницы",
    description: [
      "Наращивание ресниц", "Ламинирование ресниц", 
      "Биозавивка", "Лифтинг", "Окрашивание", "Еще..."
    ],
    extras: ["Татуаж", "Татуировки", "Эпиляция"]
  }
];

const anchors: { [key: string]: string } = {
  "Маникюр": "manicure",
  "Брови": "brows",
  "Ресницы": "lashes"
};

const Services = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h3" className={styles.title} sx={{ fontStyle: "italic"}}>
        Выбери услугу...
      </Typography>
      <Grid container spacing={10} className={styles.gridContainer}>
        {services.map((service, index) => (
          <Grid item sm={4} key={index} className={styles.serviceItem}>
            <Box className={styles.card}>
            {service.title === "Маникюр" || service.title === "Брови" || service.title === "Ресницы" ? (
              <figure className={styles.pictureFigure}> 
                <Link
                  to={`/categories#${anchors[service.title]}`} // динамически подставляем якорь
                  className={styles.link}
                  style={{ display: 'block' }} // чтобы картинка была кликабельной по всей области
                >
                  <img src={service.image} alt={service.title} className={styles.serviceImage}/>
                </Link> 
              </figure>
              
            ) : (
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
            )}

              <Typography variant="h4" className={styles.serviceTitle}>
                {/* Оборачиваем заголовки "Брови", "Маникюр" и "Ресницы" в Link для перехода */}
                {service.title === "Маникюр" || service.title === "Брови" || service.title === "Ресницы" ? (
                  <Link
                    to={`/categories#${anchors[service.title]}`} // динамически подставляем якорь
                    className={styles.link} 
                  >
                    {service.title}
                  </Link>
                ) : (
                  service.title
                )}
              </Typography>
            </Box>
            <Box className={styles.textWrapper}>
              <ul className={styles.descriptionList}> {/* список подзаголовков */}
                {service.description.map((item, idx) => {
                  const urlTitle = service.title;
                  return (
                    <li key={idx}>
                      <Link
                        to={`/masters?category=${encodeURIComponent(urlTitle)}&service=${encodeURIComponent(item.replace(/\s+/g, '+'))}`}
                        className={styles.link}
                      >
                        {item}
                      </Link>

                    </li>
                  );
                })}
              </ul>
              
              <ul className={styles.extraList}> {/* продолжение рядов подзаголовков */}
                {service.extras.map((item, idx) => {
                  const urlTitle = service.title;
                  return (
                    <li key={idx} className={styles.extraItem}>
                      <Link
                        to={`/masters?category=${encodeURIComponent(item)}`}
                        className={styles.link}
                      >
                        {item}
                      </Link>

                    </li>
                  );
                })}
              </ul>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Link to={`/categories#`} className={styles.link}>
        <Typography variant="h5" className={styles.extraTitle}>
          Все услуги мастеров...
        </Typography>
      </Link>
      
    </Box>
  );
};

export default Services;
