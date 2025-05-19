import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(255, 248, 242)',
      light: 'rgb(245, 235, 226)'
    },
    secondary: {
      main: 'rgb(229, 207, 184)',
      light: 'rgb(175, 146, 132)'
    },
    text: {
      primary: 'rgb(79, 52, 39)',
      secondary: 'rgb(140, 112, 98)'
    }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h3: {
      fontWeight: 300,
      color: 'rgb(79, 52, 39)'
    },
    subtitle1: {
      color: 'rgb(140, 112, 98)'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h3: 'h2',
          h4: 'h3',
        },
      },
    },
  }
});

export default theme;