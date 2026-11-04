import { useContext, useState } from 'react'
import { InventarioContext } from '../context/InventarioContext'

function AgregarArticulo() {
  const { agregarArticulo } = useContext(InventarioContext)
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()
    agregarArticulo({ nombre, marca, tipo })
    setNombre('')
    setMarca('')
    setTipo('')
  }

  return (
    <div>
      <h1>Agregar artículo</h1>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de producto</label>
          <input className="form-control" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </div>
  )
}

export default AgregarArticulo
