import { useState } from 'react'
import { InventarioContext } from './InventarioContext'

// Provee la lista global de artículos (nombre, marca y tipo)
function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState([])

  const agregarArticulo = (articulo) => {
    setArticulos([...articulos, { id: Date.now(), ...articulo }])
  }

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
