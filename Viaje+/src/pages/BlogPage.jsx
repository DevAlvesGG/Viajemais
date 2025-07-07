import React, { useState, useEffect} from 'react';
import axios from 'axios';

//componentes do Material UI para os cards
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Grid,
    Box
} from '@mui/material'

function BlogPage () {
    const [articles, setArticles] = useState([]); //estado para armazenar os artigos
    const [loading, setLoading] = useState(true) //estado para indicar carregamento
    const [error, setError] = useState(null) //estado para erros

    useEffect(() => {
        //função assincrona para buscar os artigos
        const fetchArticles = async () => {
            try {
                //URL da API com limite de 6 posts
                const response = await axios.get('https://dev.to/api/articles?tag=travel&per_page=6');
                setArticles(response.data) //atualiza o estado com os dados da API
                setLoading(false); // finaliza o carregamento
            }catch(err) {
                setError(err); // armazena o erro
                setLoading(false)// finaliza o carregamento mesmo com erro
                console.error("Erro ao buscar artigos:", err); // exibindo o log do erro no console
            }
        };

        fetchArticles(); // chama a função ao montar o componente

    }, []); // arrray de dependêcias vazio para executar apenas uma vez na montagem

    if (loading) {
        return <Typography variant="h5" sx={{textAlign: 'center', mt: 4 }}>Carregando artigos...</Typography>;
    }
    
    if (error) {
        return <Typography variant="h5" color="error" sx={{ textAlign: 'center', mt: 4 }}>Erro ao carregar artigos: {error.message}</Typography>;
    }

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{textAlign:'center', mb: 4}}>
                Blog de Viagens e Aventuras
            </Typography>

            <Grid container spacing={4} justifyContent="center"> {/*Grid do MUI para layoult responsivo*/}
                {articles.map((article) => (
                    <Grid item key={article.id} xs={12} sm={6} md={4}> {/*Item do Grid: 12 colunas em mobile, 6 em small, 4 em medium */}
                        <Card sx={{ height: '100%', display: 'flex', flexDirection:'column'}}>
                            <CardContent sx={{ flexGrow: 1 }}> {/* Faz o CardContent crescer para preencher espaço */}
                                <Typography gutterBottom variant="h6" component="div">
                                {article.title} [cite: 39]
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                {article.description} [cite: 40]
                                </Typography>

                                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                Publicado em: {new Date(article.published_at).toLocaleDateString()} [cite: 41]
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" href={article.url} target="_blank" rel="noopener noreferrer">
                                Leia mais 
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
}

export default BlogPage;