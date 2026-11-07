import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InventarioContext } from '../context/InventarioContext'

function Inventario() {
  const { articulos } = useContext(InventarioContext)
  const [categoria, setCategoria] = useState('Todas')
  const navigate = useNavigate()

  // El filtro se calcula aparte, el inventario original no se modifica
  const categorias = [...new Set(articulos.map((a) => a.tipo))]
  const filtrados = categoria === 'Todas' ? articulos : articulos.filter((a) => a.tipo === categoria)

  return (
    <div>
      <h1>Inventario</h1>

      <select
        className="form-select mb-3"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Todas">Todas las categorías</option>
        {categorias.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Disponible</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((a) => (
              <tr key={a.id} role="button" onClick={() => navigate(`/inventario/${a.id}`)}>
                <td>{a.nombre}</td>
                <td>{a.marca}</td>
                <td>{a.tipo}</td>
                <td>{a.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inventario
