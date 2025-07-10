import React, { useState } from 'react'

//componentes do Material UI
import {
    Grid,
    Box,
    Typography,
    Dialog,
    DialogContent,
    IconButton // Para o botão de fechar o modal
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Ícone de fechar
import GalleryImageCard from '../components/GalleryImageCard/galleryimagecard.jsx'; 

const images = [
    { id: 1, src: '/images/img_beach.jpg', alt: 'image beach 01' },
    { id: 2, src: '/images/img_beach02.jpg', alt: 'image beach 02' },
    { id: 3, src: '/images/img_beach03.jpg', alt: 'image beach 03' },
    { id: 4, src: '/images/img_beach04.jpg', alt: 'image beach 04' },
    { id: 5, src: '/images/img_beach05.jpg', alt: 'image beach 05' },
    { id: 6, src: '/images/img_beach06.jpg', alt: 'image beach 06' },
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
        <Box sx={{ p: 4 , mt: 15}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Galeria de Aventuras
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {images.map((image) => (
                    <Grid item key={image.id} xs={12} sm={6} md={4} lg={2.4}> {/* Layout responsivo */}
                        <GalleryImageCard
                            image={image} 
                            onClick={handleOpen} // Passa a função handleOpen para o componente filho
                        />
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