import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Dados das dicas
const travelTips = [
    {
        title: "Desvende o Mundo: Dicas Essenciais para sua Próxima Aventura!",
        description: "Preparar a mala, escolher o destino, planejar o roteiro... viajar é uma arte! Seja você um aventureiro solo, um casal em busca de romance ou uma família em busca de diversão, nossas dicas exclusivas vão transformar sua jornada. Desde como encontrar passagens aéreas baratas e hospedagens incríveis até os segredos para uma mala inteligente, estamos aqui para te ajudar a cada passo. Viaje mais, preocupe-se menos!"
    },
    {
        title: "Romance no Ar: Destinos Inesquecíveis para Celebrar o Amor a Dois!",
        description: "Sonhando com uma escapada romântica? Aqui você encontra inspiração para momentos únicos ao lado de quem você ama. Imagine-se caminhando de mãos dadas pelas charmosas ruas de Paris, desfrutando de um pôr do sol espetacular nas ilhas gregas, ou explorando a natureza exuberante de Fernando de Noronha. Descubra roteiros perfeitos para casais, com sugestões de experiências a dois, jantares especiais e paisagens que convidam ao romance. Prepare-se para criar memórias que durarão para sempre!"
    },
    {
        title: "O Brasil Conectado ao Mundo: Top 5 Destinos Mais Procurados em 2025!",
        description: "Curioso para saber onde os brasileiros estão marcando presença em 2025? Pesquisamos os destinos mais badalados e procurados para te manter por dentro das tendências! Desde as praias paradisíacas do Nordeste brasileiro e as metrópoles vibrantes da América do Norte, até os encantos históricos da Europa, prepare-se para se inspirar nos roteiros que estão na boca do povo. Descubra o que torna esses lugares tão irresistíveis e planeje sua próxima viagem com as tendências do momento!"
    }
];

function HomePage () {
    return (
        <Box>
            {/* Banner de Destaque */}
            <Box
                sx={{
                height: '400px', // altura do banner
                backgroundImage: 'url(/images/banner03)', // imagem de fundo do banner
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', // cor do texto
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // sombra para o texto para melhor leitura
                p: 2, // padding interno
                marginTop: '100px'
                }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                Explore o mundo com a ViajeMais! 
                </Typography>
                <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                Sua jornada de descobertas começa aqui.
                </Typography>
                <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link} // Usa o Link do react-router-dom para navegação
                to="/blog"
                sx={{
                    mt: 2,
                    fontSize: '1.2rem',
                    padding: '10px 30px',
                    backgroundColor: '#FF6F00', // Um laranja chamativo
                    '&:hover': {
                    backgroundColor: '#FF9100', // Um laranja mais claro no hover
                    },
                }}
                >
                Comece sua Aventura! 
                </Button>
            </Box>

            {/*Nova Seção de Dicas*/}
            <Box sx={{ p: 4, my: 4 }}> {/* Padding e Margem para espaçar do banner */}
                <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6 }}>
                    Dicas de Viagem Imperdíveis
                </Typography>

                <Grid container spacing={4} justifyContent="center"> {/* Espaçamento entre as grids */}
                    {travelTips.map((tip, index) => (
                        <Grid item xs={12} md={6} key={index}> {/* xs=12 para telas pequenas (ocupa tudo), md=6 para telas médias/grandes (metade) */}
                            <Box sx={{
                                p: 3,
                                border: '1px solid #e0e0e0', // Borda leve para cada dica
                                borderRadius: '8px', // Bordas arredondadas
                                minHeight: '200px', // Altura mínima para alinhamento visual
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start', // Alinha o conteúdo ao topo
                                alignItems: 'flex-start', // Alinha o texto à esquerda
                                backgroundColor: '#f9f9f9', // Leve fundo para destaque
                                boxShadow: '0px 2px 5px rgba(0,0,0,0.05)' // Sombra suave
                                }}>

                                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#FF6F00' }}>
                                    {tip.title}
                                </Typography>

                                <Typography variant="body1" sx={{ color: '#555' }}>
                                    {tip.description}
                                </Typography>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    );
}

export default HomePage;