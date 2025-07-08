import React, { useState } from 'react'

//componentes do Material UI
import {
    TextField,
    Button,
    Box,
    Typography,
    Container, // Para centralizar o formulário
    Alert // Para exibir mensagens de feedback
} from '@mui/material'


function ContactPage () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState(null); //para mensagens de sucesso/erro

    const handleSubmit = (event) => {
        event.preventDefault(); // previne o recarregamento da página

        setFeedback(null); // limpa o feedback anterior 

        // validação básica
        if (!name.trim() || !email.trim() || !message.trim()) {
            setFeedback({type: 'error', message: 'Por favor, preencha todos os campos.'});
            console.log('Erro do formulário: Campos vazios')
            return; // interronpe a função se a validação falhar
        }

        // envio para o backend
        console.log('Dados do formulário enviados: ', {name, email, message });
        setFeedback({type: 'success', message: 'Mensagem enviada com sucesso!'});

        // limpa o formulário após o envio
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}> {/* Centraliza e adiciona margem */}
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Entre em Contato Conosco
            </Typography>

            <Box
                component="form"
                sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2, // Espaçamento entre os componentes do formulário
                p: 3,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: 3 // Sombra sutil
                }}
                noValidate // Desabilita a validação HTML5 padrão do navegador
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                {feedback && ( // Exibe feedback se houver
                <Alert severity={feedback.type} sx={{ mb: 2 }}>
                    {feedback.message}
                </Alert>
                )}

                <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required // Marca como campo obrigatório
                />
                <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email" // Define o tipo para validação de email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <TextField
                label="Mensagem"
                variant="outlined"
                fullWidth
                multiline // Permite múltiplas linhas
                rows={4} // Define o número de linhas visíveis
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                />
                <Button
                variant="contained"
                color="primary"
                type="submit" // Define como botão de envio de formulário
                size="large"
                sx={{ mt: 2 }} // Margem superior
                >
                Enviar Mensagem
                </Button>
            </Box>
        </Container>
    );
}



export default ContactPage;