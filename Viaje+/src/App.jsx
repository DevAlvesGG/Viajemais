import './App.css'
import { Routes, Route } from "react-router-dom"

//componentes das páginas
import HomePage from './pages/HomePage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'

function App() {
  return (
    <>
      {/*Header fixo ( Navegação Global )*/}
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>

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
