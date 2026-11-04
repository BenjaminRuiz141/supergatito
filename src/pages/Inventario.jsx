import { useContext } from 'react'
import { InventarioContext } from '../context/InventarioContext'

function Inventario() {
  const { articulos } = useContext(InventarioContext)

  return (
    <div>
      <h1>Inventario</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((a) => (
            <tr key={a.id}>
              <td>{a.nombre}</td>
              <td>{a.marca}</td>
              <td>{a.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Inventario
