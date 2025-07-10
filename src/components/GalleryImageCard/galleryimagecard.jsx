// src/components/GalleryImageCard.js
import React from 'react';
import { Card, CardMedia } from '@mui/material';

function GalleryImageCard({ image, onClick }) {
  return (
    <Card 
      onClick={() => onClick(image)} // chama a função onClick passada como prop
      sx={{
        cursor: 'pointer',
        height: '100%', // garante que os cards tenham a mesma altura na grid
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // sombra sutil
        borderRadius: '8px', // bordas arredondadas
        overflow: 'hidden', // importante para o borderRadius funcionar com a imagem
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // transição suave
        '&:hover': {
          transform: 'scale(1.03)', // pequeno zoom ao passar o mouse
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // sombra mais forte no hover
        }
      }}
    >
      <CardMedia 
        component="img"
        // definindo um aspecto de proporção fixo para as imagens
        // 16:9 (altura='auto', maxHeight para garantir que não fique gigante)
        // 4:3 (height: '200px' ou '250px', mas talvez com objectFit: 'cover')
        // 1:1 (square)
        height="200" // ajustar se as imagens forem diferentes em altura
        image={image.src}
        alt={image.alt}
        sx={{
          objectFit: 'cover', // corta a imagem para preencher o espaço sem distorcer
          width: '100%',
        }}
      />
    </Card>
  );
}

export default GalleryImageCard;