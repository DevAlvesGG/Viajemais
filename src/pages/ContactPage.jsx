import React, { useState } from 'react'

//componentes do Material UI
import {
    TextField,
    Button,
    Box,
    Typography,
    Container, // para centralizar o formulário
    Alert // para exibir mensagens de feedback
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
        <Container maxWidth="sm" sx={{ mt: 20, mb: 4 }}> {/* Centraliza e adiciona margem */}
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Entre em Contato Conosco
            </Typography>

            <Box
                component="form"
                sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2, // espaçamento entre os componentes do formulário
                p: 3, // padding interno
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: 3 // sombra sutil
                }}
                noValidate // Desabilita a validação HTML5 padrão do navegador
                autoComplete="off"
                onSubmit={handleSubmit} // define a função de envio do formulário
            >
                {feedback && ( // Exibe feedback se houver
                <Alert severity={feedback.type} sx={{ mb: 2 }}>  
                    {feedback.message}
                </Alert>
                )}

                <TextField // Campo de entrada de texto
                label="Nome"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)} // atualiza o estado do nome
                required // marca como campo obrigatório
                />
                <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email" // define o tipo para validação de email
                value={email}
                onChange={(e) => setEmail(e.target.value)} // atualiza o estado do email
                required // marca como campo obrigatório
                />
                <TextField
                label="Mensagem"
                variant="outlined"
                fullWidth
                multiline // permite múltiplas linhas
                rows={4} // define o número de linhas visíveis
                value={message}
                onChange={(e) => setMessage(e.target.value)} // atualiza o estado da mensagem
                required // marca como campo obrigatório
                />
                <Button
                variant="contained"
                color="primary"
                type="submit" // define como botão de envio de formulário
                size="large" 
                sx={{ mt: 2 }} // margem top (superior)
                >
                Enviar Mensagem
                </Button>
            </Box>
        </Container>
    );
}



export default ContactPage;