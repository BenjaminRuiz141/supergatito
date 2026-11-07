# SuperGatito - Gestión de Inventario

Aplicación web desarrollada con React, React Router y Bootstrap para gestionar el inventario y el carrito de compras de un supermercado.

## Funcionamiento general

La aplicación cuenta con un estado global administrado con React Context que almacena la lista de artículos del inventario y los productos agregados al carrito.

### Navegación y vistas

- **Inicio (`/`)**: Página principal de bienvenida al sistema.
- **Nuestras tiendas (`/tiendas`)**: Muestra la lista de sucursales disponibles y sus direcciones.
- **Contáctanos (`/contacto`)**: Muestra los datos de contacto del supermercado.
- **Agregar artículo (`/agregar`)**: Formulario para registrar nuevos productos en el inventario indicando nombre, marca, tipo (categoría) y cantidad disponible.
- **Inventario (`/inventario`)**: Muestra una tabla con todos los artículos disponibles y permite filtrarlos por categoría sin alterar los datos originales. Al hacer clic sobre cualquier fila, se accede al detalle del producto.
- **Detalle de artículo (`/inventario/:id`)**: Muestra la información completa del producto seleccionado y permite agregarlo al carrito descontando una unidad del stock disponible.
- **Carrito (`/carrito`)**: Lista los artículos agregados por el usuario y permite aumentar o disminuir sus cantidades, actualizando en tiempo real el stock general del inventario.

## Tecnologías utilizadas

- React
- React Router DOM
- Bootstrap 5
- Vite

## Ejecución local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```