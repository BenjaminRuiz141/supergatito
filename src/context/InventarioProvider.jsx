import { useState } from 'react'
import { InventarioContext } from './InventarioContext'

const ARTICULOS_INICIALES = [
  { id: 1, nombre: 'Leche Entera 1L', marca: 'Colun', tipo: 'Lácteos', cantidad: 10 },
  { id: 2, nombre: 'Yogurt Batido', marca: 'Soprole', tipo: 'Lácteos', cantidad: 8 },
  { id: 3, nombre: 'Arroz Grado 1', marca: 'Tucapel', tipo: 'Abarrotes', cantidad: 15 },
  { id: 4, nombre: 'Detergente Líquido', marca: 'Omo', tipo: 'Limpieza', cantidad: 5 },
]

// Estado global: inventario (nombre, marca, tipo, cantidad) y carrito
function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState(ARTICULOS_INICIALES)
  const [carrito, setCarrito] = useState([]) // [{ id, cantidad }]

  const agregarArticulo = (articulo) => {
    setArticulos([...articulos, { id: Date.now(), ...articulo }])
  }

  // Suma 1 al carrito y resta 1 al inventario
  const agregarAlCarrito = (id) => {
    const articulo = articulos.find((a) => a.id === id)
    if (!articulo || articulo.cantidad < 1) return

    setArticulos(articulos.map((a) => (a.id === id ? { ...a, cantidad: a.cantidad - 1 } : a)))
    const enCarrito = carrito.find((c) => c.id === id)
    setCarrito(
      enCarrito
        ? carrito.map((c) => (c.id === id ? { ...c, cantidad: c.cantidad + 1 } : c))
        : [...carrito, { id, cantidad: 1 }]
    )
  }

  // Resta 1 al carrito y devuelve 1 al inventario
  const quitarDelCarrito = (id) => {
    const enCarrito = carrito.find((c) => c.id === id)
    if (!enCarrito) return

    setArticulos(articulos.map((a) => (a.id === id ? { ...a, cantidad: a.cantidad + 1 } : a)))
    setCarrito(
      enCarrito.cantidad === 1
        ? carrito.filter((c) => c.id !== id)
        : carrito.map((c) => (c.id === id ? { ...c, cantidad: c.cantidad - 1 } : c))
    )
  }

  return (
    <InventarioContext.Provider
      value={{ articulos, carrito, agregarArticulo, agregarAlCarrito, quitarDelCarrito }}
    >
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider
