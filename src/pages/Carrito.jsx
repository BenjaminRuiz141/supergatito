import { useContext } from 'react'
import { InventarioContext } from '../context/InventarioContext'

function Carrito() {
  const { articulos, carrito, agregarAlCarrito, quitarDelCarrito } = useContext(InventarioContext)

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => {
                const articulo = articulos.find((a) => a.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{articulo.nombre}</td>
                    <td>{articulo.marca}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => quitarDelCarrito(item.id)}>-</button>
                      <span className="mx-2">{item.cantidad}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        disabled={articulo.cantidad < 1}
                        onClick={() => agregarAlCarrito(item.id)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Carrito
