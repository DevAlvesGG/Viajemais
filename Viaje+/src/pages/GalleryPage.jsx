import React, { useState } from 'react'

//componentes do Material UI
import {
    Grid,
    Box,
    Typography,
    Card,
    CardMedia,
    Dialog,
    DialogContent,
    IconButton // Para o botão de fechar o modal
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Ícone de fechar

const images = [
    { id: 1, src: '/images/img_beach', alt: 'image beach 01' },
    { id: 2, src: '/images/img_beach02', alt: 'image beach 02' },
    { id: 3, src: '/images/img_beach03', alt: 'image beach 03' },
    { id: 4, src: '/images/img_beach04', alt: 'image beach 04' },
    { id: 5, src: '/images/img_beach05', alt: 'image beach 05' },
    { id: 6, src: '/images/img_beach06', alt: 'image beach 06' },
]


function GalleryPage () {
    const [open, setOpen ] = useState(false); // estado para controlar a abertura do modal
    const [selectedImage, setSelectedImage] = useState(null); // estado para a imagen selecionada do modal

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        setSelectedImage(null);
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Galeria de Aventuras
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {images.map((image) => (
                    <Grid item key={image.id} xs={12} sm={6} md={4} lg={3}> {/* Layout responsivo */}
                        <Card onClick={() => handleOpen(image)} sx={{cursor: 'pointer'}}>
                            <CardMedia 
                                component= "img"
                                height="200"
                                image={image.src}
                                alt={image.alt}
                                />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* modal para exibir a imagem clicada */}
            
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent sx={{ p: 0, position: 'relative'}}>  {/* padding 0 para a imagem ocupar todo o espaço */}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],zIndex:1 //garante que o icone fique acima da imagem
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={{width: '100%', height: 'auto', display: 'block'}}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    )
    
}

export default GalleryPage;