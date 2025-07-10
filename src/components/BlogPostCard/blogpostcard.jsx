// src/components/BlogPostCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material'; // componentes necessários do MUI
import { Link } from 'react-router-dom'; 

function BlogPostCard({ title, description, date, url }) {
  return (
    <Card sx={{ 
        height: '100%', // para que todos os cards na Grid tenham a mesma altura
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between', // para o botão "Leia mais" ficar sempre no final
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // sombra notavel para o card
        borderRadius: '8px', // bordas arredondadas
        transition: 'transform 0.2s ease-in-out', // efeito de transição no hover
        '&:hover': {
            transform: 'translateY(-5px)', // levanta o card um pouco no hover
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)', // sombra mais forte no hover
        }
        }}>

        <CardContent>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#333' }}>
                {title}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Publicado em: {date}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                {description}
            </Typography>
        </CardContent>

      <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end' }}> {/* padding interno, sem padding top, alinha à direita */}
        <Button 
            variant="text" 
            color="primary" 
            component="a" 
            href={url}
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
                fontWeight: 'bold', 
                color: '#FF6F00', // cor do botão "Comece sua Aventura"
                '&:hover': {
                backgroundColor: 'transparent', // mantém o fundo transparente no hover
                textDecoration: 'underline', // sublinha o texto no hover
                }
            }}
        >

          Leia mais
        </Button>
      </Box>
    </Card>
  );
}

export default BlogPostCard;