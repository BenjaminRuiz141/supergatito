import { HashRouter, Routes, Route } from 'react-router-dom'
import InventarioProvider from './context/InventarioProvider'
import Home from './pages/Home'
import Tiendas from './pages/Tiendas'
import Contacto from './pages/Contacto'
import AgregarArticulo from './pages/AgregarArticulo'
import Inventario from './pages/Inventario'
import DetalleArticulo from './pages/DetalleArticulo'
import Carrito from './pages/Carrito'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'

// Rutas con React Router y estado global del inventario
function App() {
  return (
    <InventarioProvider>
      <HashRouter>
        <TopNav />
        <main className="container py-4 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tiendas" element={<Tiendas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/agregar" element={<AgregarArticulo />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/inventario/:id" element={<DetalleArticulo />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>
        <BottomNav />
      </HashRouter>
    </InventarioProvider>
  )
}

export default App
