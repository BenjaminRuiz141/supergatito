import { Link } from 'react-router-dom'

// Menú superior para gestionar el inventario
function TopNav() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">SuperGatito</Link>
      <div className="d-flex gap-3">
        <Link className="nav-link text-white" to="/agregar">Agregar artículo</Link>
        <Link className="nav-link text-white" to="/inventario">Inventario</Link>
        <Link className="nav-link text-white" to="/carrito">Carrito</Link>
      </div>
    </nav>
  )
}

export default TopNav
