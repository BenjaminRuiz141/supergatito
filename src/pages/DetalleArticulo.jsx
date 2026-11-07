import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { InventarioContext } from '../context/InventarioContext'

function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, agregarAlCarrito } = useContext(InventarioContext)
  const articulo = articulos.find((a) => a.id === Number(id))

  if (!articulo) {
    return <p>Artículo no encontrado.</p>
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{articulo.nombre}</h1>
        <p className="card-text">Marca: {articulo.marca}</p>
        <p className="card-text">Tipo: {articulo.tipo}</p>
        <p className="card-text">Disponible: {articulo.cantidad}</p>
        <button
          className="btn btn-success me-2"
          disabled={articulo.cantidad < 1}
          onClick={() => agregarAlCarrito(articulo.id)}
        >
          Agregar al carrito
        </button>
        <Link className="btn btn-secondary" to="/inventario">Volver</Link>
      </div>
    </div>
  )
}

export default DetalleArticulo
