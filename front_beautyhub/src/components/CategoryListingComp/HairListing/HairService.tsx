import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from 'react-router-dom';
import styles from './HairService.module.scss';

import haircolorImg from './files/окрашивание.jpg';
import hairlayingImg from './files/укладки.jpg';
import hairkeratinImg from './files/кератин.jpg';
import hairhappyImg from './files/счастье.jpg';
import haircutsImg from './files/стрижки.jpg';
import hairstylesImg from './files/прически.jpg';

const services = [
  {
    title: "Стрижки",
    image: haircutsImg,
    items: []
  },
  {
    title: "Окрашивание",
    image: haircolorImg,
    items: [],
  },
  {
    title: "Укладки",
    image: hairlayingImg,
    items: [],
  },
  {
    title: "Прически",
    image: hairstylesImg,
    items: [
      "Наращивание",
      "Дреды",
      "Брейды",
    ]
  },
  {
    title: "Кератиновое выпрямление",
    image: hairkeratinImg,
    items: [
        "Афро-кудри",
        "Биозавивка",
        "Ботокс"
    ]
  },
  {
    title: "Счастье для волос",
    image: hairhappyImg,
    items: [
        "Нанопластика",
        "Биксипластика",
        "Осветление"
    ]
  },
];

const HairdressersListing = () => {
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
        Парикмахеры
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{
        fontSize: { xs: '1.2rem', md: '1.5rem' }
      }}>
        от 300₽
      </Typography>

      <Grid container spacing={{ xs: 3, md: 3}} sx={{ px: '5%', py: 3 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card className={styles.card} sx={{ bgcolor: 'transparent' }}>
              <CardMedia
                component="img"
                height="300"
                image={service.image}
                alt={service.title}
                sx={{
                  objectFit: 'cover',
                  height: { xs: 200, md: 300 }
                }}
              />
              <CardContent>
                <Typography
                  variant="h4"
                  component={Link}
                  to={`/masters?category=Парикмахеры&service=${encodeURIComponent(service.title)}`}
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

export default HairdressersListing;
