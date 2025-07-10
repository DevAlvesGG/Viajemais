import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'


function Header () {
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#4169E1', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', height: '89px'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ flexGrow : 1, display: 'flex', alignItems: 'center'}}>
                <img
                src="/images/logo.svg"
                alt="ViajeMais logo"
                style={{ height: '90px', marginRight: '10px', backgroundColor: 'white'}}
                />  
            </Box>

            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/blog">Blog</Button>
            <Button color="inherit" component={Link} to="/galeria">Galeria</Button>
            <Button color="inherit" component={Link} to="/contato">Contatos</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
