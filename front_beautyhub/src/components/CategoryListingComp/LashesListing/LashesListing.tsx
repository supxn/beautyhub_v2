import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from 'react-router-dom';
import botox from './Ботокс.jpg';
import laminir from './Ламинирование.jpg';
import narachlash from './Наращивание.jpg';
import styles from './LashesListing.module.scss';

const services = [
  {
    title: "Ботокс",
    image: botox,
    items: ["Биозавивка", "Нанопластика"]
  },
  {
    title: "Ламинирование",
    image: laminir,
    items: ["Цветное ламинирование", "Наращивание"]
  },
  {
    title: "Наращивание",
    image: narachlash,
    items: ["Молекулярное восстановление"]
  }
];

const LashesListing = () => {
  return (
    <Box component="section" className={styles.lashes}>
      {/* Декоративная линия */}
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
        Оформление ресниц
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ 
        fontSize: { xs: '1.2rem', md: '1.5rem' } 
      }}>
        от 600₽
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ px: '5%', py: 2 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
            <Card className={styles.card}>
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
                <Typography className={styles.cardTitle}
                  variant="h4"
                  component={Link}
                  to={`/masters?category=Ресницы&service=${encodeURIComponent(service.title)}`}
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

export default LashesListing;
