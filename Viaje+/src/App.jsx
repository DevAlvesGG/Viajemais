import './App.css'
import { Routes, Route, Link } from "react-router-dom"

//componentes das páginas
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'

//componentes do Material UI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      {/*Header fixo Material UI*/}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Viaje+
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/galeria">Galeria</Button>
          <Button color="inherit" component={Link} to="/contato">Contatos</Button>

        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/galeria" element={<GalleryPage/>} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
