import React, { useState, useEffect} from 'react';
import axios from 'axios';
import BlogPostCard from '../components/BlogPostCard/blogpostcard';

//componentes do Material UI para os cards
import { Typography, Grid, Box } from '@mui/material'

function BlogPage () {
    const [articles, setArticles] = useState([]); //estado para armazenar os artigos
    const [loading, setLoading] = useState(true) //estado para indicar carregamento
    const [error, setError] = useState(null) //estado para erros

    useEffect(() => {
        //função assincrona para buscar os artigos
        const fetchArticles = async () => {
            try {
                //URL da API com limite de 6 posts e com filtro de idioma
                const response = await axios.get('https://dev.to/api/articles?tag=travel&per_page=6&language=pt');
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
        return <Typography variant="h5" sx={{textAlign: 'center', mt: 4 }}>Carregando artigos...</Typography>
        
    }

    if (error) {
        return <Typography variant="h5" color="error" sx={{ textAlign: 'center', mt: 4 }}>Erro ao carregar artigos: {error.message}</Typography>;
    }

    if (articles.length === 0) {
        return <Typography variant="h5" color="error" sx={{textAlign: 'center', mt: 4 }}>
                    Nenhum artigo de viagem em português encontrado no momento.
                </Typography>
    }

    return (
       <Box sx={{ mt: 10, p: 4 }}> {/* margin top e padding interno padrão geeral no box*/}
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign:'center', mb: 6 }}> {/* mb para espaçamento do título */}
                Blog de Viagens e Aventuras
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {articles.map((article) => (
                    <Grid item key={article.id} xs={12} sm={6} md={4}>
                        <BlogPostCard
                            title={article.title}
                            description={article.description || article.body_markdown.substring(0, 150) + '...'} // Usa description ou um trecho do body_markdown
                            date={new Date(article.published_at).toLocaleDateString('pt-BR')} // Formata a data para português do Brasil
                            url={article.url}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default BlogPage;