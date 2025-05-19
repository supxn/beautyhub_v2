import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
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
        Оформление ресниц
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
                <Typography variant="h4" component="h4" gutterBottom>
                  {service.title}
                </Typography>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LashesListing;
