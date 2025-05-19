import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import aparatpic from './Аппаратный маникюр.jpg';
import combi from './Комби.jpg';
import narach from './Наращивание.jpg';
import spa from './спа.jpg';
import classicmanic from './классический маник.jpg';
import pedicure from './Педикюр.jpg';
import styles from './ManicureListing.module.scss';
import { Link } from 'react-router-dom'; // Оставили router Link как есть

const services = [
  {
    title: "Аппаратный маникюр",
    image: aparatpic,
    items: ["Снятие покрытия гель-лак", "Покрытие гель-лак", "Коррекция маникюра"]
  },
  {
    title: "Комбинированный маникюр",
    image: combi,
    items: ["Восстановление френч", "Детский маникюр", "Укрепление ногтей"]
  },
  {
    title: "Наращивание",
    image: narach,
    items: ["Мужской маникюр", "Мужской педикюр", "Витражный маникюр"]
  },
  {
    title: "СПА-уход",
    image: spa,
    items: []
  },
  {
    title: "Классический маникюр",
    image: classicmanic,
    items: []
  },
  {
    title: "Педикюр",
    image: pedicure,
    items: []
  }
];

const ManicureListing = () => {
  return (
    <Box component="section" className={styles.manicure}>
      <Box sx={{ 
        width: '100%', 
        my: 4,
        '& > div': {
          backgroundColor: 'secondary.light',
          height: '1px',
          width: '85%',
          mx: 'auto'
        }
      }}>
        <Box />
      </Box>

      <Typography variant="h3" align="center" gutterBottom>
        Маникюр
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        от 600₽
      </Typography>

      <Grid container spacing={4} sx={{ px: '10%', py: 2 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card className={styles.card}>
              <CardMedia
                component="img"
                height="300"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  component={Link} 
                  to={`/masters?category=Маникюр&service=${encodeURIComponent(service.title)}`} 
                  gutterBottom
                  sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    fontStyle: 'italic',
                    '&:hover': {
                      color: 'secondary.main',
                      transition: 'color 0.3s'
                    }
                  }}
                >
                  {service.title}
                </Typography>
                {service.items.length > 0 && (
                  <Box component="ul" sx={{ 
                    pl: 2,
                    '& li': {
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: 'text.secondary'
                    }
                  }}>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ManicureListing;
