import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {' ViajeMais. Todos os direitos reservados.'}
        </Typography>
        {/* Você pode adicionar mais links ou ícones de redes sociais aqui */}
      </Container>
    </Box>
  );
}

export default Footer;