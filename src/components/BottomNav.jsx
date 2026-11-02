import { Link } from 'react-router-dom'

// Menú inferior de navegación
function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">Inicio</Link>
      <Link to="/tiendas">Nuestras tiendas</Link>
      <Link to="/contacto">Contáctanos</Link>
    </nav>
  )
}

export default BottomNav
