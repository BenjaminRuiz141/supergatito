import { Link } from 'react-router-dom'

// Menú inferior de navegación
function BottomNav() {
  return (
    <nav className="navbar bg-light border-top fixed-bottom justify-content-around">
      <Link className="nav-link" to="/">Inicio</Link>
      <Link className="nav-link" to="/tiendas">Nuestras tiendas</Link>
      <Link className="nav-link" to="/contacto">Contáctanos</Link>
    </nav>
  )
}

export default BottomNav
