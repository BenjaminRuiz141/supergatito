import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tiendas from './pages/Tiendas'
import Contacto from './pages/Contacto'
import BottomNav from './components/BottomNav'
import './App.css'

// Configuración de rutas con React Router
function App() {
  return (
    <BrowserRouter>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <BottomNav />
    </BrowserRouter>
  )
}

export default App
