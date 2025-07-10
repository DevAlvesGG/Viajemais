import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // um azul vibrante
      light: '#6573c3',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff9800', // Laranja para destaques, como o botão "Comece sua Aventura!"
      light: '#ffac33',
      dark: '#b26a00',
      contrastText: '#fff',
    },
    background: {
      default: '#f4f6f8', // cinza bem claro para o fundo
      paper: '#ffffff', // branco para os elementos de papel, como cards
    },
    text: {
      primary: '#212121', // Cor de texto principal
      secondary: '#757575', // Cor de texto secundário
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // fonte padrão no MUI
    h4: { // estilo para títulos de página
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#3f51b5',
    },
    h6: { // Estilo para títulos de cards
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#757575',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // borda arredondada para botões
          textTransform: 'none', // remove uppercase padrão do MUI
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // borda arredondada para cards
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // sombra suave para os cards
        },
      },
    },
    MuiAppBar: { // ajustes para o Header
        styleOverrides: {
            root: {
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)', // sombra suave para o header
            },
        },
    },
  },
});

export default theme;
