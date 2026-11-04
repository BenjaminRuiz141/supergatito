import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InventarioProvider from './context/InventarioProvider'
import Home from './pages/Home'
import Tiendas from './pages/Tiendas'
import Contacto from './pages/Contacto'
import AgregarArticulo from './pages/AgregarArticulo'
import Inventario from './pages/Inventario'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'

// Rutas con React Router y estado global del inventario
function App() {
  return (
    <InventarioProvider>
      <BrowserRouter>
        <TopNav />
        <main className="container py-4 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tiendas" element={<Tiendas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/agregar" element={<AgregarArticulo />} />
            <Route path="/inventario" element={<Inventario />} />
          </Routes>
        </main>
        <BottomNav />
      </BrowserRouter>
    </InventarioProvider>
  )
}

export default App
