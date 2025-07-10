import { Routes, Route } from "react-router-dom"
import Header from './components/Header/header.jsx'; 
import Footer from './components/Footer/footer.jsx';

//componentes das páginas
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'

//componente do Material UI
import Box from '@mui/material/Box'


function App() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header /> {/* Renderize o Header */}
        <Box component="main" sx={{ flexGrow: 1 }}> {/* Conteúdo principal ocupa o espaço restante */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<h1>Página Não Encontrada</h1>} />
          </Routes>
        </Box>
        <Footer /> {/* Renderize o Footer */}
      </Box>
  
  )
}

export default App
