import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from 'react-router-dom';
import styles from './OtherService.module.scss';

import zagarImg from './files/загар.jpg';
import makeupImg from './files/макияж.jpg';
import cosmetologyImg from './files/косметология.jpg';
import massageImg from './files/массаж.jpg';
import spaImg from './files/спа.jpg';
import epilationImg from './files/эпиляция.jpg';

const services = [
  {
    title: "Косметология",
    image: cosmetologyImg,
    items: [],
  },
  {
    title: "Макияж",
    image: makeupImg,
    items: [],

  },
  {
    title: "Загар",
    image: zagarImg,
    items: [],
  },
  {
    title: "Массаж",
    image: massageImg,
    items: ["Парикмахеры", "Пирсинг"]
  },
  {
    title: "СПА-процедуры",
    image: spaImg,
    items: ["Татуаж", "Татуировки"]
  },
  {
    title: "Эпиляция",
    image: epilationImg,
    items: ["Стилист"]
  }
];

const OtherServicesListing = () => {
  return (
    <Box component="section" className={styles.container}>
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

      <Typography variant="h3" align="center" gutterBottom sx={{
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
      }}>
        Другие популярные услуги
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{
        fontSize: { xs: '1.2rem', md: '1.5rem' }
      }}>
        от 300₽
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ px: '5%', py: 2 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card className={styles.card} sx={{ bgcolor: 'transparent' }}>
              <CardMedia
                component="img"
                height="240"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover',
                  height: { xs: 200, md: 240 }
                }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  component={Link}
                  to={`/masters?category=Другие_услуги&service=${encodeURIComponent(service.title)}`}
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
                <Box component="ul" sx={{
                  pl: 2,
                  '& li': {
                    textAlign: 'left',
                    lineHeight: 1.5,
                    color: 'text.secondary'
                  }
                }}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OtherServicesListing;